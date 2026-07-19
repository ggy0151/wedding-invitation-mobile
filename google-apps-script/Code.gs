const SHEET_NAME = 'RSVP';
const HEADERS = [
  'submittedAt',
  'attendance',
  'side',
  'name',
  'phoneLast4',
  'createdAt',
  'invitationUrl',
  'pageUrl',
  'userAgent'
];

function doGet() {
  return jsonResponse_({
    ok: true,
    message: 'Wedding RSVP endpoint is running.'
  });
}

function doPost(e) {
  try {
    const payload = parsePayload_(e);
    const sheet = getOrCreateSheet_();

    sheet.appendRow([
      new Date(),
      payload.attendance || '',
      payload.side || '',
      payload.name || '',
      payload.phoneLast4 || '',
      payload.createdAt || '',
      payload.invitationUrl || '',
      payload.pageUrl || '',
      payload.userAgent || ''
    ]);

    return jsonResponse_({ ok: true });
  } catch (error) {
    return jsonResponse_({
      ok: false,
      message: error.message
    });
  }
}

function getOrCreateSheet_() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = spreadsheet.getSheetByName(SHEET_NAME);

  if (!sheet) {
    sheet = spreadsheet.insertSheet(SHEET_NAME);
  }

  ensureHeaders_(sheet);
  return sheet;
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
