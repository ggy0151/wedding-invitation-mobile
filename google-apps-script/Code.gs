const SPREADSHEET_ID = '1dGzBCF8-l5_Xa9NwD751LlTv_XqcXEqMmyIrwGsdCxQ';
const SHEET_NAME = 'RSVP';
const GUESTBOOK_SHEET_NAME = 'MESSAGES';
const HEADERS = [
  'submittedAt',
  'attendance',
  'side',
  'name',
  'count',
  'phoneLast4',
  'createdAt',
  'invitationUrl',
  'pageUrl',
  'userAgent',
  'submissionId',
  'respondentId'
];
const GUESTBOOK_HEADERS = ['messageId', 'createdAt', 'name', 'message'];

function doGet(e) {
  const action = String((e && e.parameter && e.parameter.action) || '').trim();

  if (action === 'guestbook') {
    const limit = Math.min(20, Math.max(1, Number(e.parameter.limit) || 6));
    const payload = {
      ok: true,
      messages: listGuestbookMessages_(limit)
    };
    const callback = String(e.parameter.callback || '').trim();

    return callback ? javascriptResponse_(callback, payload) : jsonResponse_(payload);
  }

  return jsonResponse_({
    ok: true,
    message: 'Wedding RSVP endpoint is running.',
    version: 'rsvp-v4',
    sheetName: SHEET_NAME
  });
}

function setupRsvpSheet() {
  const sheet = getOrCreateSheet_();
  const backfilledRespondentIds = backfillRespondentIds_(sheet);
  const result = {
    ok: true,
    spreadsheetId: SPREADSHEET_ID,
    sheetName: sheet.getName(),
    lastRow: sheet.getLastRow(),
    backfilledRespondentIds
  };

  console.log(`[RSVP] setup complete ${JSON.stringify(result)}`);
  return result;
}

function doPost(e) {
  let submissionId = '';
  const lock = LockService.getScriptLock();

  try {
    const payload = parsePayload_(e);
    submissionId = String(payload.submissionId || Utilities.getUuid());
    payload.submissionId = submissionId;

    if (String(payload.formType || '') === 'guestbook') {
      const result = saveGuestbookMessage_(payload, lock);
      return jsonResponse_({
        ok: true,
        action: result.action,
        messageId: result.messageId
      });
    }

    payload.name = String(payload.name || '').trim();
    payload.phoneLast4 = normalizePhoneLast4_(payload.phoneLast4);

    validatePayload_(payload);
    payload.respondentId = buildRespondentId_(payload.name, payload.phoneLast4);
    console.log(`[RSVP] received ${JSON.stringify({
      submissionId,
      respondentId: payload.respondentId,
      attendance: payload.attendance,
      side: payload.side,
      name: payload.name,
      count: payload.count,
      phoneLast4: payload.phoneLast4
    })}`);

    lock.waitLock(10000);
    const sheet = getOrCreateSheet_();
    const action = upsertRsvp_(sheet, payload);

    console.log(`[RSVP] ${action} submissionId=${submissionId}`);

    return jsonResponse_({
      ok: true,
      action,
      submissionId,
      respondentId: payload.respondentId
    });
  } catch (error) {
    console.error(`[RSVP] failed submissionId=${submissionId || 'unknown'} ${error.stack || error.message || error}`);
    return jsonResponse_({
      ok: false,
      message: error.message,
      submissionId
    });
  } finally {
    if (lock.hasLock()) {
      lock.releaseLock();
    }
  }
}

function saveGuestbookMessage_(payload, lock) {
  if (String(payload.website || '').trim()) {
    return { action: 'ignored', messageId: '' };
  }

  const name = String(payload.name || '').trim();
  const message = String(payload.message || '').trim();
  const messageId = String(payload.messageId || Utilities.getUuid()).trim();

  if (name.length < 1 || name.length > 20) {
    throw new Error('Guestbook name must be between 1 and 20 characters.');
  }

  if (message.length < 2 || message.length > 200) {
    throw new Error('Guestbook message must be between 2 and 200 characters.');
  }

  lock.waitLock(10000);
  const sheet = getOrCreateGuestbookSheet_();
  const existingRow = findGuestbookMessageRow_(sheet, messageId);
  if (existingRow) {
    return { action: 'duplicate', messageId };
  }

  sheet.appendRow([
    neutralizeSheetFormula_(messageId),
    new Date(),
    neutralizeSheetFormula_(name),
    neutralizeSheetFormula_(message)
  ]);

  console.log(`[GUESTBOOK] created messageId=${messageId}`);
  return { action: 'created', messageId };
}

function getOrCreateGuestbookSheet_() {
  const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
  let sheet = spreadsheet.getSheetByName(GUESTBOOK_SHEET_NAME);

  if (!sheet) {
    sheet = spreadsheet.insertSheet(GUESTBOOK_SHEET_NAME);
  }

  const headerRange = sheet.getRange(1, 1, 1, GUESTBOOK_HEADERS.length);
  const currentHeaders = headerRange.getValues()[0];
  const needsHeaders = GUESTBOOK_HEADERS.some((header, index) => currentHeaders[index] !== header);

  if (needsHeaders) {
    headerRange.setValues([GUESTBOOK_HEADERS]);
    sheet.setFrozenRows(1);
  }

  return sheet;
}

function findGuestbookMessageRow_(sheet, messageId) {
  const lastRow = sheet.getLastRow();
  if (lastRow < 2) return 0;

  const values = sheet.getRange(2, 1, lastRow - 1, 1).getDisplayValues();
  for (let index = values.length - 1; index >= 0; index -= 1) {
    if (String(values[index][0] || '') === messageId) return index + 2;
  }

  return 0;
}

function listGuestbookMessages_(limit) {
  const sheet = getOrCreateGuestbookSheet_();
  const lastRow = sheet.getLastRow();
  if (lastRow < 2) return [];

  const startRow = Math.max(2, lastRow - limit + 1);
  const rowCount = lastRow - startRow + 1;
  const values = sheet.getRange(startRow, 1, rowCount, GUESTBOOK_HEADERS.length).getValues();

  return values
    .reverse()
    .map((row) => ({
      id: String(row[0] || ''),
      createdAt: row[1] instanceof Date ? row[1].toISOString() : String(row[1] || ''),
      name: restoreSheetValue_(row[2]),
      message: restoreSheetValue_(row[3])
    }));
}

function neutralizeSheetFormula_(value) {
  const text = String(value || '');
  return /^[=+\-@]/.test(text) ? `'${text}` : text;
}

function restoreSheetValue_(value) {
  return String(value || '').replace(/^'(?=[=+\-@])/, '');
}

function getOrCreateSheet_() {
  const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
  let sheet = spreadsheet.getSheetByName(SHEET_NAME);

  if (!sheet) {
    sheet = spreadsheet.insertSheet(SHEET_NAME);
  }

  ensureHeaders_(sheet);
  return sheet;
}

function upsertRsvp_(sheet, payload) {
  const row = [
    new Date(),
    payload.attendance || '',
    payload.side || '',
    payload.name || '',
    payload.count || '',
    payload.phoneLast4 || '',
    payload.createdAt || '',
    payload.invitationUrl || '',
    payload.pageUrl || '',
    payload.userAgent || '',
    payload.submissionId || '',
    payload.respondentId || ''
  ];
  const existingRow = findExistingRow_(
    sheet,
    payload.respondentId,
    payload.name,
    payload.phoneLast4
  );

  if (existingRow) {
    sheet.getRange(existingRow, 1, 1, HEADERS.length).setValues([row]);
    return 'updated';
  }

  sheet.appendRow(row);
  return 'created';
}

function findExistingRow_(sheet, respondentId, name, phoneLast4) {
  const lastRow = sheet.getLastRow();
  if (lastRow < 2) return 0;

  const values = sheet.getRange(2, 1, lastRow - 1, HEADERS.length).getValues();
  const respondentIdIndex = HEADERS.indexOf('respondentId');
  const normalizedName = normalizeName_(name);
  const normalizedPhone = normalizePhoneLast4_(phoneLast4);

  for (let index = values.length - 1; index >= 0; index -= 1) {
    const rowRespondentId = String(values[index][respondentIdIndex] || '').trim();
    const rowName = normalizeName_(values[index][3]);
    const rowPhone = normalizePhoneLast4_(values[index][5]);

    if (
      (rowRespondentId && rowRespondentId === respondentId) ||
      (rowName === normalizedName && rowPhone === normalizedPhone)
    ) {
      return index + 2;
    }
  }

  return 0;
}

function buildRespondentId_(name, phoneLast4) {
  const identityKey = `${normalizeName_(name)}:${normalizePhoneLast4_(phoneLast4)}`;
  const digest = Utilities.computeDigest(
    Utilities.DigestAlgorithm.SHA_256,
    identityKey,
    Utilities.Charset.UTF_8
  );
  const hex = digest
    .map((value) => (value + 256).toString(16).slice(-2))
    .join('');

  return `rsvp_${hex}`;
}

function normalizeName_(name) {
  const value = String(name || '').trim().replace(/\s+/g, '');

  try {
    return value.normalize('NFKC');
  } catch (error) {
    return value;
  }
}

function normalizePhoneLast4_(phoneLast4) {
  return String(phoneLast4 || '').replace(/\D/g, '').slice(-4);
}

function backfillRespondentIds_(sheet) {
  const lastRow = sheet.getLastRow();
  if (lastRow < 2) return 0;

  const rowCount = lastRow - 1;
  const identityValues = sheet.getRange(2, 4, rowCount, 3).getValues();
  const respondentIdColumn = HEADERS.indexOf('respondentId') + 1;
  const respondentIdRange = sheet.getRange(2, respondentIdColumn, rowCount, 1);
  const respondentIdValues = respondentIdRange.getValues();
  let backfilledCount = 0;

  for (let index = 0; index < rowCount; index += 1) {
    if (String(respondentIdValues[index][0] || '').trim()) continue;

    const name = identityValues[index][0];
    const phoneLast4 = normalizePhoneLast4_(identityValues[index][2]);
    if (!normalizeName_(name) || !/^\d{4}$/.test(phoneLast4)) continue;

    respondentIdValues[index][0] = buildRespondentId_(name, phoneLast4);
    backfilledCount += 1;
  }

  if (backfilledCount) {
    respondentIdRange.setValues(respondentIdValues);
  }

  return backfilledCount;
}

function validatePayload_(payload) {
  const requiredFields = ['attendance', 'side', 'name', 'phoneLast4'];
  const missingFields = requiredFields.filter((field) => !String(payload[field] || '').trim());

  if (missingFields.length) {
    throw new Error(`Missing required fields: ${missingFields.join(', ')}`);
  }

  if (!/^\d{4}$/.test(String(payload.phoneLast4))) {
    throw new Error('phoneLast4 must contain exactly four digits.');
  }
}

function ensureHeaders_(sheet) {
  const headerRange = sheet.getRange(1, 1, 1, HEADERS.length);
  const currentHeaders = headerRange.getValues()[0];
  const needsHeaders = HEADERS.some((header, index) => currentHeaders[index] !== header);

  if (needsHeaders) {
    headerRange.setValues([HEADERS]);
    sheet.setFrozenRows(1);
  }
}

function parsePayload_(e) {
  const payload = {};

  if (e && e.postData && e.postData.contents) {
    const contentType = String(e.postData.type || '').toLowerCase();
    const rawBody = e.postData.contents;

    if (contentType.indexOf('application/json') > -1) {
      Object.assign(payload, JSON.parse(rawBody || '{}'));
    } else {
      Object.assign(payload, parseFormBody_(rawBody));
    }
  }

  if (e && e.parameter) {
    Object.keys(e.parameter).forEach((key) => {
      if (payload[key] === undefined) {
        payload[key] = e.parameter[key];
      }
    });
  }

  return payload;
}

function parseFormBody_(rawBody) {
  if (!rawBody) return {};

  return rawBody.split('&').reduce((result, pair) => {
    if (!pair) return result;

    const [rawKey, rawValue = ''] = pair.split('=');
    const key = decodeURIComponent(String(rawKey).replace(/\+/g, ' '));
    const value = decodeURIComponent(String(rawValue).replace(/\+/g, ' '));
    result[key] = value;
    return result;
  }, {});
}

function jsonResponse_(payload) {
  return ContentService
    .createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON);
}

function javascriptResponse_(callback, payload) {
  if (!/^[A-Za-z_$][0-9A-Za-z_$.]*$/.test(callback)) {
    throw new Error('Invalid callback name.');
  }

  return ContentService
    .createTextOutput(`${callback}(${JSON.stringify(payload)});`)
    .setMimeType(ContentService.MimeType.JAVASCRIPT);
}
