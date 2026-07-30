const SPREADSHEET_ID = '1dGzBCF8-l5_Xa9NwD751LlTv_XqcXEqMmyIrwGsdCxQ';
const SHEET_NAME = 'RSVP';
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
  'submissionId'
];

function doGet() {
  return jsonResponse_({
    ok: true,
    message: 'Wedding RSVP endpoint is running.',
    version: 'rsvp-v3',
    sheetName: SHEET_NAME
  });
}

function setupRsvpSheet() {
  const sheet = getOrCreateSheet_();
  const result = {
    ok: true,
    spreadsheetId: SPREADSHEET_ID,
    sheetName: sheet.getName(),
    lastRow: sheet.getLastRow()
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

    validatePayload_(payload);
    console.log(`[RSVP] received ${JSON.stringify({
      submissionId,
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
      submissionId
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
    payload.submissionId || ''
  ];
  const existingRow = findExistingRow_(sheet, payload.name, payload.phoneLast4);

  if (existingRow) {
    sheet.getRange(existingRow, 1, 1, HEADERS.length).setValues([row]);
    return 'updated';
  }

  sheet.appendRow(row);
  return 'created';
}

function findExistingRow_(sheet, name, phoneLast4) {
  const lastRow = sheet.getLastRow();
  if (lastRow < 2) return 0;

  const values = sheet.getRange(2, 1, lastRow - 1, HEADERS.length).getValues();
  const normalizedName = String(name || '').trim();
  const normalizedPhone = String(phoneLast4 || '').trim();

  for (let index = values.length - 1; index >= 0; index -= 1) {
    const rowName = String(values[index][3] || '').trim();
    const rowPhone = String(values[index][5] || '').trim();

    if (rowName === normalizedName && rowPhone === normalizedPhone) {
      return index + 2;
    }
  }

  return 0;
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
