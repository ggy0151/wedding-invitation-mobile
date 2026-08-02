const invitationConfig = {
  site: {
    liveUrl: 'https://ggy0151.github.io/wedding-invitation-mobile/',
    shareTitle: '윤찬 ♥ 지윤 결혼합니다',
    shareText: '2026년 12월 20일 일요일 오후 12시 30분, 더블트리 바이 힐튼 서울 판교에서 뵙겠습니다.'
  },
  couple: {
    groomFull: '신윤찬',
    brideFull: '김지윤',
    groomShort: '윤찬',
    brideShort: '지윤'
  },
  event: {
    dateIso: '2026-12-20T12:30:00+09:00',
    dateLabel: '2026.12.20',
    dateKorean: '2026년 12월 20일 일요일 오후 12시 30분',
    venueShort: '더블트리 바이 힐튼 서울 판교',
    venueEnglish: 'DOUBLETREE BY HILTON SEOUL PANGYO',
    address: '경기 성남시 분당구 백현로 26\n더블트리 바이 힐튼 서울 판교 1층 그랜드볼룸홀',
    intro: '소중한 분들을 모시고\n저희의 새로운 시작을 함께 나누고자 합니다.'
  },
  cover: {
    src: './assets/cover-wedding-photo-01.jpg',
    label: 'Wedding Portrait'
  },
  story: [
    {
      label: 'Groom',
      name: '신랑 신윤찬',
      note: '어릴 적 사진',
      imageLabel: 'Yoon Chan',
      src: './assets/groom-childhood.jpg'
    },
    {
      label: 'Bride',
      name: '신부 김지윤',
      note: '어릴 적 사진',
      imageLabel: 'Ji Yoon',
      src: './assets/bride-childhood.jpg'
    }
  ],
  parentsFeature: {
    label: "Groom's Parents",
    title: '신랑 가족사진',
    summary: '부모님 사진',
    imageLabel: 'Groom Family',
    src: './assets/groom-family.jpg',
    familyLines: [
      { parents: '신영호 · 조혜경', relation: '의 아들', role: '신랑', name: '윤찬' },
      { parents: '김광주 · 유미경', relation: '의 딸', role: '신부', name: '지윤' }
    ],
    letterTitle: '부모님 편지',
    letterBody: '부모님 손글씨 편지 TODO\n이 영역은 문장을 추가하면 자연스럽게 아래로 늘어납니다.'
  },
  letters: [
    {
      title: '신랑 신부 인사',
      body: '새로이 시작하는 작은 사랑이\n보다 크고 깊은 사랑이 되려고 합니다.\n함께 자리하여 축복해주시면 더 없는 기쁨이겠습니다.',
      signature: '윤찬 ♥ 지윤 드림'
    },
    {
      title: '양가 부모님 마음',
      body: '정성으로 키운 두 아이가\n이제 한 가정을 이루려 합니다.\n함께 축복해 주시면 감사하겠습니다.',
      signature: '양가 부모님 일동'
    }
  ],
  gallery: [
    { title: '우리의 순간', caption: '아치형 프레임 안에서 두 분의 분위기가 자연스럽게 담긴 장면입니다.', imageLabel: 'Scene 02', src: './assets/wedding-photo-02.jpg' },
    { title: '우리의 순간', caption: '신부의 부드러운 무드가 잘 살아나는 웨딩 포트레이트입니다.', imageLabel: 'Scene 03', src: './assets/wedding-photo-bride-01.jpg' },
    { title: '우리의 순간', caption: '추가해주신 웨딩 사진을 갤러리로 이어서 감상하실 수 있습니다.', imageLabel: 'Scene 04', src: './assets/KakaoTalk_20260730_214802172.jpg' },
    { title: '우리의 순간', caption: '추가해주신 웨딩 사진을 갤러리로 이어서 감상하실 수 있습니다.', imageLabel: 'Scene 05', src: './assets/KakaoTalk_20260730_214802172_01.jpg' },
    { title: '우리의 순간', caption: '추가해주신 웨딩 사진을 갤러리로 이어서 감상하실 수 있습니다.', imageLabel: 'Scene 06', src: './assets/KakaoTalk_20260730_214802172_02.jpg' },
    { title: '우리의 순간', caption: '추가해주신 웨딩 사진을 갤러리로 이어서 감상하실 수 있습니다.', imageLabel: 'Scene 07', src: './assets/KakaoTalk_20260730_214802172_03.jpg' },
    { title: '우리의 순간', caption: '추가해주신 웨딩 사진을 갤러리로 이어서 감상하실 수 있습니다.', imageLabel: 'Scene 08', src: './assets/KakaoTalk_20260730_214802172_04.jpg' },
    { title: '우리의 순간', caption: '추가해주신 웨딩 사진을 갤러리로 이어서 감상하실 수 있습니다.', imageLabel: 'Scene 09', src: './assets/KakaoTalk_20260730_214802172_05.jpg' },
    { title: '우리의 순간', caption: '추가해주신 웨딩 사진을 갤러리로 이어서 감상하실 수 있습니다.', imageLabel: 'Scene 10', src: './assets/KakaoTalk_20260730_214802172_06.jpg' },
    { title: '우리의 순간', caption: '추가해주신 웨딩 사진을 갤러리로 이어서 감상하실 수 있습니다.', imageLabel: 'Scene 11', src: './assets/KakaoTalk_20260730_214802172_07.jpg' },
    { title: '우리의 순간', caption: '추가해주신 웨딩 사진을 갤러리로 이어서 감상하실 수 있습니다.', imageLabel: 'Scene 12', src: './assets/KakaoTalk_20260730_214802172_08.jpg' },
    { title: '우리의 순간', caption: '추가해주신 웨딩 사진을 갤러리로 이어서 감상하실 수 있습니다.', imageLabel: 'Scene 13', src: './assets/KakaoTalk_20260730_214802172_09.jpg' },
    { title: '우리의 순간', caption: '추가해주신 웨딩 사진을 갤러리로 이어서 감상하실 수 있습니다.', imageLabel: 'Scene 14', src: './assets/KakaoTalk_20260730_214802172_10.jpg' },
    { title: '우리의 순간', caption: '추가해주신 웨딩 사진을 갤러리로 이어서 감상하실 수 있습니다.', imageLabel: 'Scene 15', src: './assets/KakaoTalk_20260730_214802172_11.jpg' },
    { title: '우리의 순간', caption: '추가해주신 웨딩 사진을 갤러리로 이어서 감상하실 수 있습니다.', imageLabel: 'Scene 16', src: './assets/KakaoTalk_20260730_214802172_12.jpg' },
    { title: '우리의 순간', caption: '추가해주신 웨딩 사진을 갤러리로 이어서 감상하실 수 있습니다.', imageLabel: 'Scene 17', src: './assets/KakaoTalk_20260730_214802172_13.jpg' },
    { title: '우리의 순간', caption: '추가해주신 웨딩 사진을 갤러리로 이어서 감상하실 수 있습니다.', imageLabel: 'Scene 18', src: './assets/KakaoTalk_20260730_214802172_14.jpg' },
    { title: '우리의 순간', caption: '새로 추가해주신 웨딩 사진을 확대해서 이어 보실 수 있습니다.', imageLabel: 'Scene 19', src: './assets/KakaoTalk_20260730_221404933.jpg' },
    { title: '우리의 순간', caption: '새로 추가해주신 웨딩 사진을 확대해서 이어 보실 수 있습니다.', imageLabel: 'Scene 20', src: './assets/KakaoTalk_20260730_221404933_01.jpg' },
    { title: '우리의 순간', caption: '새로 추가해주신 웨딩 사진을 확대해서 이어 보실 수 있습니다.', imageLabel: 'Scene 21', src: './assets/KakaoTalk_20260730_221404933_02.jpg' },
    { title: '우리의 순간', caption: '새로 추가해주신 웨딩 사진을 확대해서 이어 보실 수 있습니다.', imageLabel: 'Scene 22', src: './assets/KakaoTalk_20260730_221404933_03.jpg' },
    { title: '우리의 순간', caption: '새로 추가해주신 웨딩 사진을 확대해서 이어 보실 수 있습니다.', imageLabel: 'Scene 23', src: './assets/KakaoTalk_20260730_221404933_05.jpg' },
    { title: '우리의 순간', caption: '새로 추가해주신 웨딩 사진을 확대해서 이어 보실 수 있습니다.', imageLabel: 'Scene 24', src: './assets/KakaoTalk_20260730_221404933_06.jpg' },
    { title: '우리의 순간', caption: '새로 추가해주신 웨딩 사진을 확대해서 이어 보실 수 있습니다.', imageLabel: 'Scene 25', src: './assets/KakaoTalk_20260730_221404933_07.jpg' },
    { title: '우리의 순간', caption: '새로 추가해주신 웨딩 사진을 확대해서 이어 보실 수 있습니다.', imageLabel: 'Scene 26', src: './assets/KakaoTalk_20260730_221404933_08.jpg' },
    { title: '우리의 순간', caption: '새로 추가해주신 웨딩 사진을 확대해서 이어 보실 수 있습니다.', imageLabel: 'Scene 28', src: './assets/KakaoTalk_20260730_221404933_10.jpg' },
    { title: '우리의 순간', caption: '새로 추가해주신 웨딩 사진을 확대해서 이어 보실 수 있습니다.', imageLabel: 'Scene 29', src: './assets/SON00036.JPG' }
  ],
  venue: {
    title: '더블트리 바이 힐튼 서울 판교',
    hall: '1층 그랜드볼룸홀',
    badge: 'Grand Ballroom / 1F',
    description: '호텔 1층 그랜드볼룸홀에서 예식을 진행합니다.\n아래 내비게이션 버튼으로 바로 길안내를 열 수 있습니다.',
    address: '경기 성남시 분당구 백현로 26',
    addressDetail: '더블트리 바이 힐튼 서울 판교',
    placeName: '더블트리 바이 힐튼 서울 판교 1층 그랜드볼룸홀',
    map: {
      provider: 'kakao',
      javascriptKey: 'de98b2bb05ceb24f4e9d304652a40ecb',
      allowedOrigins: [
        'https://ggy0151.github.io',
        'http://localhost:3000',
        'http://127.0.0.1:3000',
        'http://localhost:5500',
        'http://127.0.0.1:5500',
        'http://localhost:8000',
        'http://127.0.0.1:8000',
        'http://localhost:8080',
        'http://127.0.0.1:8080'
      ],
      fallbackMessage: '카카오맵을 불러오는 중입니다.'
    },
    transport: [
      {
        label: '버스 Bus',
        title: '220, 310, 370, 누리4, 117번(마을)',
        copy: '버스 이용 시 위 노선을 통해 호텔로 이동하시면 됩니다.'
      },
      {
        label: '지하철 Subway',
        title: '수인분당선 서현역 3번 출구',
        copy: '지하철 이용 시 서현역 3번 출구에서 이동하시면 됩니다.'
      },
      {
        label: '주차 Parking',
        title: '웨딩홀 건물 지하 및 야외 주차장 이용 가능',
        copy: '건물 지하 주차장과 야외 주차장 모두 이용 가능합니다.'
      },
      {
        label: '셔틀 Shuttle',
        title: '정자역 2번 출구',
        copy: '11:30 ~ 14:30 15분 간격 운행 (25인승) 예정입니다.'
      },
      {
        label: '주소 Address',
        title: '경기 성남시 분당구 백현로 26',
        copy: '더블트리 바이 힐튼 서울 판교'
      }
    ],
    links: [
      { label: '티맵', href: 'tmap://search?name=더블트리%20바이%20힐튼%20서울%20판교' },
      { label: '카카오내비', href: 'kakaonavi://search?name=더블트리%20바이%20힐튼%20서울%20판교' },
      { label: '네이버지도', href: 'nmap://search?query=더블트리%20바이%20힐튼%20서울%20판교' }
    ]
  },
  rsvp: {
    endpoint: 'https://script.google.com/macros/s/AKfycbzsQPXagUxjm0fQlSFrztSL9Zz0KTMRtQAJZaRiRlq7QeIsmIyYNFMUDSZ1Y0LzSYrM/exec',
    mode: 'no-cors',
    doneKey: 'wedding_invitation_rsvp_done_v2',
    draftsKey: 'wedding_invitation_rsvp_drafts_v2',
    lastResponseKey: 'wedding_invitation_rsvp_last_response_v1',
    helper: '한 분 한 분을 정성껏 모시고 싶습니다.\n참석 여부를 미리 남겨주시면 감사하겠습니다.',
    mealNotice: '식사는 참석 인원에 맞춰 준비됩니다.'
  },
  accounts: [
    {
      group: '신랑측 마음 전하실 곳',
      hint: '신랑 신윤찬',
      items: [{ name: '신랑 신윤찬', bank: '국민은행', number: '075210660157' }]
    },
    {
      group: '신부측 마음 전하실 곳',
      hint: '신부 김지윤',
      items: [{ name: '신부 김지윤', bank: '신한은행', number: '110455998600' }]
    }
  ],
  notice: '예식장 안내에 따라 화환은 정중히 사양합니다.\n보내주시는 축하의 마음만 감사히 받겠습니다.'
};

const app = document.querySelector('#app');
const state = {
  countdownTimer: null,
  toastTimer: null,
  lightboxIndex: 0,
  lightboxTouchStartX: 0,
  lightboxTouchStartY: 0
};

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function nl2br(value) {
  return escapeHtml(value).replace(/\n/g, '<br>');
}

function normalizeUrl(value) {
  return String(value || '').trim();
}

function getInvitationUrl() {
  return normalizeUrl(invitationConfig.site.liveUrl) || window.location.href;
}

function countdownLabel(dateIso) {
  const now = new Date();
  const target = new Date(dateIso);
  const current = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const goal = new Date(target.getFullYear(), target.getMonth(), target.getDate());
  const diff = Math.round((goal - current) / 86400000);

  if (diff > 0) return `D-${diff}`;
  if (diff === 0) return 'D-DAY';
  return `D+${Math.abs(diff)}`;
}

function formatEnglishDate(dateIso) {
  const date = new Date(dateIso);
  const dateText = new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(date);
  const hour = date.getHours();
  const minute = String(date.getMinutes()).padStart(2, '0');
  const suffix = hour >= 12 ? 'PM' : 'AM';
  const displayHour = hour % 12 === 0 ? 12 : hour % 12;
  return `${dateText} | ${suffix} ${displayHour}:${minute}`;
}

function getCountdownParts(dateIso) {
  const diff = new Date(dateIso).getTime() - Date.now();
  const safe = Math.max(diff, 0);

  return {
    total: diff,
    days: Math.floor(safe / 86400000),
    hours: Math.floor((safe % 86400000) / 3600000),
    minutes: Math.floor((safe % 3600000) / 60000),
    seconds: Math.floor((safe % 60000) / 1000)
  };
}

function buildWeddingCalendar(dateIso) {
  const date = new Date(dateIso);
  const year = date.getFullYear();
  const month = date.getMonth();
  const eventDay = date.getDate();
  const firstDay = new Date(year, month, 1).getDay();
  const lastDate = new Date(year, month + 1, 0).getDate();
  const weekdays = ['일', '월', '화', '수', '목', '금', '토'];
  const cells = [];

  weekdays.forEach((label, index) => {
    cells.push(`
      <div class="calendar-weekday ${index === 0 ? 'is-sunday' : ''} ${index === 6 ? 'is-saturday' : ''}">
        ${label}
      </div>
    `);
  });

  for (let index = 0; index < firstDay; index += 1) {
    cells.push('<div class="calendar-cell is-empty" aria-hidden="true"></div>');
  }

  for (let day = 1; day <= lastDate; day += 1) {
    const cellDate = new Date(year, month, day);
    const weekday = cellDate.getDay();
    const classes = ['calendar-cell'];

    if (weekday === 0) classes.push('is-sunday');
    if (weekday === 6) classes.push('is-saturday');
    if (day === eventDay) classes.push('is-event');

    cells.push(`<div class="${classes.join(' ')}"><span>${day}</span></div>`);
  }

  while (cells.length % 7 !== 0) {
    cells.push('<div class="calendar-cell is-empty" aria-hidden="true"></div>');
  }

  return `
    <div class="calendar-card">
      <div class="calendar-head">
        <div>
          <span class="calendar-month">${year}.${String(month + 1).padStart(2, '0')}</span>
          <p class="calendar-summary">${escapeHtml(invitationConfig.event.dateKorean)}</p>
        </div>
        <span class="calendar-pill">${countdownLabel(dateIso)}</span>
      </div>
      <div class="calendar-grid">
        ${cells.join('')}
      </div>
    </div>
  `;
}

function buildVisual(item, slot, extraClass = '') {
  if (item.src) {
    return `<img src="${escapeHtml(item.src)}" alt="${escapeHtml(item.title || item.name || item.label)}" loading="lazy">`;
  }

  return `
    <div class="${slot}-placeholder ${extraClass}">
      <div>
        <strong>${escapeHtml(item.imageLabel || item.label || item.title || 'Wedding')}</strong>
        <p>사진을 연결하면 이 자리에 실제 이미지가 표시됩니다.</p>
      </div>
    </div>
  `;
}

function buildStory() {
  return invitationConfig.story
    .map(
      (item) => `
        <article class="story-photo">
          ${buildVisual(item, 'story')}
          <div class="story-caption">
            <small>${escapeHtml(item.label)}</small>
            <strong>${escapeHtml(item.name)}</strong>
            <span>${escapeHtml(item.note || '')}</span>
          </div>
        </article>
      `
    )
    .join('');
}

function buildParentsFeature() {
  const item = invitationConfig.parentsFeature;
  if (!item) return '';

  return `
    <article class="parents-feature-card">
      <div class="parents-feature-head">${escapeHtml(item.label)}</div>
      <div class="parents-feature-visual">
        ${buildVisual(item, 'story')}
      </div>
      <div class="family-introduction">
        ${(item.familyLines || [])
          .map(
            (line) => `
              <p class="family-introduction-line">
                <span>${escapeHtml(line.parents)}${escapeHtml(line.relation)}</span>
                <strong>${escapeHtml(line.role)} ${escapeHtml(line.name)}</strong>
              </p>
            `
          )
          .join('')}
      </div>
      <div class="parents-letter-layer">
        <div class="parents-letter-title">${escapeHtml(item.letterTitle)}</div>
        <p class="parents-letter-body copy">${nl2br(item.letterBody || '')}</p>
      </div>
    </article>
  `;
}

function buildLetters() {
  return invitationConfig.letters
    .map(
      (item) => `
        <article class="letter-item">
          <div class="letter-title">${escapeHtml(item.title)}</div>
          <p class="letter-body copy">${nl2br(item.body)}</p>
          <div class="letter-sign">${escapeHtml(item.signature)}</div>
        </article>
      `
    )
    .join('');
}

function buildGallery() {
  return invitationConfig.gallery
    .map(
      (item, index) => `
        <button
          class="gallery-tile gallery-tile--${index % 9 === 0 ? 'featured' : 'default'}"
          type="button"
          data-gallery-index="${index}"
          aria-label="${escapeHtml(item.title)}"
        >
          <div class="gallery-tile-frame">
            ${buildVisual(item, 'gallery')}
          </div>
        </button>
      `
    )
    .join('');
}

function buildVenueLinks() {
  return invitationConfig.venue.links
    .map((item) => `<a class="button-link outline" href="${escapeHtml(item.href)}">${escapeHtml(item.label)}</a>`)
    .join('');
}

function buildTransport() {
  return invitationConfig.venue.transport
    .map(
      (item) => `
        <article class="transport-item">
          <small>${escapeHtml(item.label)}</small>
          <strong class="transport-title">${escapeHtml(item.title)}</strong>
          <p class="account-copy">${escapeHtml(item.copy)}</p>
        </article>
      `
    )
    .join('');
}

function buildVenueAddress() {
  return `
    <strong class="venue-title">${escapeHtml(invitationConfig.venue.title)}</strong><br>
    <span class="venue-hall">${escapeHtml(invitationConfig.venue.hall)}</span><br>
    <span class="venue-line">${escapeHtml(invitationConfig.venue.address)}</span><br>
    <span class="venue-line">${escapeHtml(invitationConfig.venue.addressDetail)}</span>
  `;
}

function buildMapFallback(message) {
  return `
    <div class="map-fallback">
      <div>
        <strong>${escapeHtml(invitationConfig.venue.placeName)}</strong>
        <p>${escapeHtml(message)}</p>
      </div>
    </div>
  `;
}

function buildAccounts() {
  return invitationConfig.accounts
    .map(
      (group) => `
        <section class="account-group">
          <div class="account-trigger">
            <div>
              <small>Account</small>
              <strong class="account-title">${escapeHtml(group.group)}</strong>
              <p class="account-copy">${escapeHtml(group.hint)}</p>
            </div>
          </div>
          <div class="account-panel">
            ${group.items
              .map(
                (item) => `
                  <article class="account-item">
                    <div class="account-line">
                      <span class="account-bank">${escapeHtml(item.bank)}</span>
                      <span class="account-number">${escapeHtml(item.number)}</span>
                      <strong class="account-name">${escapeHtml(item.name)}</strong>
                    </div>
                    <button class="copy-button" type="button" data-copy="${escapeHtml(item.number)}">복사하기</button>
                  </article>
                `
              )
              .join('')}
          </div>
        </section>
      `
    )
    .join('');
}

function buildAccountActions() {
  return `
    <div class="account-actions">
      <button class="account-share-button account-share-button--share" type="button" data-share-invite>카카오톡 공유하기</button>
      <button class="account-share-button account-share-button--copy" type="button" data-copy-url>청첩장 주소 복사하기</button>
    </div>
  `;
}

function renderApp() {
  const responded = localStorage.getItem(invitationConfig.rsvp.doneKey) === 'true';
  const rsvpLabel = responded ? '응답 다시 보기' : '참석 여부 남기기';
  const rsvpStatus = invitationConfig.rsvp.endpoint
    ? '응답은 연결된 구글 스프레드시트로 바로 전송됩니다.'
    : '아직 RSVP 웹앱이 연결되지 않아 현재 기기에만 임시 저장됩니다.';

  app.innerHTML = `
    <div class="page-shell">
      <main class="page">
        <section class="section reply-first reveal" id="reply-first">
          <span class="mini-label">RSVP FIRST</span>
          <h2 class="reply-title">참석 여부를 먼저 알려주세요</h2>
          <p class="reply-copy">${nl2br('소중한 걸음을 더 정성스럽게 준비할 수 있도록\n참석 여부를 먼저 여쭙습니다.')}</p>
          <div class="reply-actions">
            <button class="button primary" type="button" data-open-rsvp>${rsvpLabel}</button>
          </div>
        </section>

        <section class="section cover reveal" id="top">
          <div class="cover-frame">
            <div class="cover-visual">
              ${buildVisual(invitationConfig.cover, 'cover')}
              <div class="cover-names">
                <div class="cover-name-card cover-name-card--bride">
                  <small>신부</small>
                  <strong>${escapeHtml(invitationConfig.couple.brideFull)}</strong>
                </div>
                <div class="cover-name-card cover-name-card--groom">
                  <small>신랑</small>
                  <strong>${escapeHtml(invitationConfig.couple.groomFull)}</strong>
                </div>
              </div>
              <div class="cover-copy">
                <p class="cover-overline">YOU'RE INVITED TO</p>
                <h1 class="cover-title">Our Wedding</h1>
                <p class="cover-meta">${escapeHtml(formatEnglishDate(invitationConfig.event.dateIso))}</p>
                <p class="cover-location">${escapeHtml(invitationConfig.event.venueEnglish)}</p>
              </div>
            </div>
          </div>
          <div class="cover-actions">
            <a class="button-link ghost" href="#venue">예식장 보기</a>
            <button class="button ghost" type="button" data-scroll="#accounts">마음 전하기</button>
          </div>
        </section>

        <section class="section wedding-day reveal" id="wedding-day">
          <span class="mini-label">SAVE THE DATE</span>
          <h2 class="wedding-day-title">${escapeHtml(invitationConfig.event.dateKorean)}</h2>
          <p class="wedding-day-copy">${escapeHtml(formatEnglishDate(invitationConfig.event.dateIso))}</p>
          <p class="wedding-day-place">
            <span class="wedding-day-place-main">${escapeHtml(invitationConfig.event.venueShort)}</span>
            <span class="wedding-day-place-dot">·</span>
            <span class="wedding-day-place-hall">${escapeHtml(invitationConfig.venue.hall)}</span>
          </p>
          <p class="wedding-day-address">${nl2br(invitationConfig.event.address)}</p>
          ${buildWeddingCalendar(invitationConfig.event.dateIso)}
          <div class="countdown-grid" id="countdownGrid">
            <article class="countdown-card">
              <strong data-countdown="days">0</strong>
              <span>DAYS</span>
            </article>
            <article class="countdown-card">
              <strong data-countdown="hours">0</strong>
              <span>HOURS</span>
            </article>
            <article class="countdown-card">
              <strong data-countdown="minutes">0</strong>
              <span>MINUTES</span>
            </article>
            <article class="countdown-card">
              <strong data-countdown="seconds">0</strong>
              <span>SECONDS</span>
            </article>
          </div>
          <p class="countdown-copy" id="countdownCopy">${escapeHtml(invitationConfig.couple.groomShort)} ♥ ${escapeHtml(invitationConfig.couple.brideShort)} 결혼식까지 기다리고 있습니다.</p>
        </section>

        <section class="section section--spaced reveal">
          <div class="wedding-quote-card">
            <small class="wedding-quote-label">With love</small>
            <div class="wedding-quote">
              <p>
                눈을 맞추고 다정함을 나누며<br>
                평생을 함께하고 싶은 확신을 얻었습니다.
              </p>
              <p>
                매일 더 많이 웃게 해주는 사람과<br>
                <strong>같은 곳을 바라보며 걸어가 보려 합니다.</strong>
              </p>
              <p>
                귀한 발걸음으로 저희의 시작을<br>
                함께 밝혀주시면 더없이 행복하겠습니다.
              </p>
            </div>
          </div>
        </section>

        <section class="section section--spaced reveal">
          <span class="mini-label">FAMILY</span>
          <h2 class="section-title">가족의 사랑으로 자라온 시간</h2>
          <div class="story-strip">
            ${buildStory()}
          </div>
          <div class="parents-feature-wrap">
            ${buildParentsFeature()}
          </div>
        </section>

        <section class="section section--spaced reveal">
          <span class="mini-label">LETTER</span>
          <h2 class="section-title">전하고 싶은 인사</h2>
          <div class="letter-stack">
            ${buildLetters()}
          </div>
        </section>

        <section class="section section--spaced reveal" id="gallery">
          <span class="mini-label">GALLERY</span>
          <h2 class="section-title">우리의 장면들</h2>
          <p class="section-copy">사진을 눌러 원본 이미지를 바로 볼 수 있습니다.</p>
          <div class="gallery-flow">
            ${buildGallery()}
          </div>
        </section>

        <section class="section section--spaced reveal" id="venue">
          <span class="mini-label">LOCATION</span>
          <h2 class="section-title">예식장 안내</h2>
          <div class="venue-block">
            <div class="map-visual">
              <div class="map-badge">
                <small>${escapeHtml(invitationConfig.venue.badge)}</small>
              </div>
              <div class="map-canvas" id="venueMap">
                ${buildMapFallback(invitationConfig.venue.map.fallbackMessage)}
              </div>
            </div>
            <p class="venue-address">${buildVenueAddress()}</p>
            <div class="venue-links">${buildVenueLinks()}</div>
            <div class="transport-list">${buildTransport()}</div>
          </div>
        </section>

        <section class="section section--spaced reveal" id="accounts">
          <span class="mini-label">HEART</span>
          <h2 class="section-title">마음 전하실 곳</h2>
          <div class="account-wrap">${buildAccounts()}</div>
          ${buildAccountActions()}
          <p class="notice-copy">${nl2br(invitationConfig.notice)}</p>
        </section>

        <footer class="footer reveal">
          <p class="footer-copy">${escapeHtml(invitationConfig.couple.groomShort)} · ${escapeHtml(invitationConfig.couple.brideShort)} wedding invitation</p>
        </footer>
      </main>

      <div class="sticky-bar">
        <div class="sticky-grid">
          <button class="sticky-button" type="button" data-open-rsvp>
            <strong>참석 여부</strong>
            <span>먼저 응답</span>
          </button>
          <button class="sticky-button" type="button" data-scroll="#venue">
            <strong>예식장 보기</strong>
            <span>주소 확인</span>
          </button>
          <button class="sticky-button" type="button" data-scroll="#accounts">
            <strong>마음 전하기</strong>
            <span>계좌 보기</span>
          </button>
        </div>
      </div>

      <section class="modal" id="rsvpModal" aria-hidden="true">
        <div class="modal-sheet">
          <div class="modal-head">
            <div>
              <span class="mini-label">RSVP</span>
              <h2 class="modal-title">참석 의사를 전해주세요</h2>
            </div>
            <button class="close-button" type="button" data-close-modal="rsvpModal" aria-label="닫기">×</button>
          </div>
          <p class="rsvp-copy">${nl2br(invitationConfig.rsvp.helper)}</p>
          <p class="form-note">${escapeHtml(rsvpStatus)}</p>
          <form id="rsvpForm" class="rsvp-form">
            <section class="rsvp-block">
              <label class="field-label">어느 분의 하객이신가요?</label>
              <div class="choice-grid">
                <label class="choice-card">
                  <input type="radio" name="side" value="신랑측" required>
                  <span>신랑</span>
                </label>
                <label class="choice-card">
                  <input type="radio" name="side" value="신부측" required>
                  <span>신부</span>
                </label>
              </div>
            </section>

            <section class="rsvp-block">
              <label class="field-label">참석하실 수 있나요?</label>
              <div class="choice-grid">
                <label class="choice-card">
                  <input type="radio" name="attendance" value="참석할게요" required checked>
                  <span>참석할게요</span>
                </label>
                <label class="choice-card">
                  <input type="radio" name="attendance" value="참석이 어려워요" required>
                  <span>참석이 어려워요</span>
                </label>
              </div>
            </section>

            <section class="rsvp-block">
              <label class="field-label" for="guestName">성함이 어떻게 되시나요?</label>
              <input class="field-input" id="guestName" name="name" type="text" placeholder="성함을 입력해 주세요" required>
            </section>

            <section class="rsvp-block">
              <label class="field-label" for="guestCount">참석 인원을 알려주세요</label>
              <input class="field-input" id="guestCount" name="count" type="number" inputmode="numeric" min="1" step="1" value="1" required>
              <p class="rsvp-inline-note">${escapeHtml(invitationConfig.rsvp.mealNotice)}</p>
            </section>

            <section class="rsvp-block">
              <label class="field-label" for="guestPhoneLast4">동명이인 체크를 위한 전화번호 뒷 4자리를 입력해 주세요</label>
              <input
                class="field-input"
                id="guestPhoneLast4"
                name="phoneLast4"
                type="text"
                inputmode="numeric"
                maxlength="4"
                pattern="[0-9]{4}"
                placeholder="핸드폰 번호 뒤 4자리"
                required
              >
            </section>

            <button class="button primary rsvp-submit" type="submit" id="rsvpSubmitButton">체크 완료하기</button>
          </form>
        </div>
      </section>

      <section class="modal" id="lightboxModal" aria-hidden="true">
        <div class="modal-sheet lightbox-sheet">
          <div class="modal-head lightbox-head">
            <button class="close-button" type="button" data-close-modal="lightboxModal" aria-label="닫기">×</button>
          </div>
          <div class="lightbox-stage">
            <button class="lightbox-nav lightbox-nav--prev" type="button" data-lightbox-step="-1" aria-label="이전 사진 보기">‹</button>
            <div class="lightbox-visual" id="lightboxVisual"></div>
            <button class="lightbox-nav lightbox-nav--next" type="button" data-lightbox-step="1" aria-label="다음 사진 보기">›</button>
          </div>
          <div class="lightbox-meta">
            <span class="lightbox-count" id="lightboxCount">1 / 1</span>
          </div>
        </div>
      </section>

      <div class="toast" id="toast"></div>
    </div>
  `;
}

function setupReveal() {
  const nodes = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  nodes.forEach((node) => observer.observe(node));
}

function showToast(message) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('is-visible');
  window.clearTimeout(state.toastTimer);
  state.toastTimer = window.setTimeout(() => toast.classList.remove('is-visible'), 2200);
}

async function copyText(value) {
  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(value);
    } else {
      const area = document.createElement('textarea');
      area.value = value;
      area.style.position = 'absolute';
      area.style.left = '-9999px';
      document.body.appendChild(area);
      area.select();
      document.execCommand('copy');
      document.body.removeChild(area);
    }
    showToast('복사되었습니다.');
  } catch (error) {
    showToast('복사에 실패했습니다.');
  }
}

async function shareInvitation() {
  const url = getInvitationUrl();

  try {
    if (navigator.share) {
      await navigator.share({
        title: invitationConfig.site.shareTitle,
        text: invitationConfig.site.shareText,
        url
      });
      return;
    }

    await copyText(url);
    showToast('공유할 수 있는 링크를 복사했어요.');
  } catch (error) {
    if (error?.name === 'AbortError') return;
    await copyText(url);
    showToast('링크를 복사했어요.');
  }
}

function openModal(id) {
  const modal = document.getElementById(id);
  if (!modal) return;
  modal.classList.add('is-open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeModal(id) {
  const modal = document.getElementById(id);
  if (!modal) return;
  if (modal.contains(document.activeElement)) {
    document.activeElement.blur();
  }
  modal.classList.remove('is-open');
  modal.setAttribute('aria-hidden', 'true');
  if (!document.querySelector('.modal.is-open')) {
    document.body.style.overflow = '';
  }
}

function syncRsvpLabel() {
  const responded = localStorage.getItem(invitationConfig.rsvp.doneKey) === 'true';
  const label = responded ? '응답 다시 보기' : '참석 여부 남기기';
  document.querySelectorAll('[data-open-rsvp]').forEach((button) => {
    if (button.classList.contains('sticky-button')) return;
    button.textContent = label;
  });
}

function renderLightbox(index) {
  const total = invitationConfig.gallery.length;
  if (!total) return;

  const safeIndex = (index + total) % total;
  const item = invitationConfig.gallery[safeIndex];
  state.lightboxIndex = safeIndex;

  document.getElementById('lightboxCount').textContent = `${safeIndex + 1} / ${total}`;
  document.getElementById('lightboxVisual').innerHTML = item.src
    ? `<img src="${escapeHtml(item.src)}" alt="${escapeHtml(item.title)}">`
    : `
        <div class="lightbox-placeholder">
          <div>
            <strong>${escapeHtml(item.imageLabel)}</strong>
            <p>사진을 연결하면 확대 보기에서도 같은 이미지가 보입니다.</p>
          </div>
        </div>
      `;
}

function moveLightbox(step) {
  if (!invitationConfig.gallery.length) return;
  renderLightbox(state.lightboxIndex + step);
}

function bindActions() {
  document.querySelectorAll('[data-open-rsvp]').forEach((button) => {
    button.addEventListener('click', () => openModal('rsvpModal'));
  });

  document.querySelectorAll('[data-close-modal]').forEach((button) => {
    button.addEventListener('click', () => closeModal(button.dataset.closeModal));
  });

  document.querySelectorAll('.modal').forEach((modal) => {
    modal.addEventListener('click', (event) => {
      if (event.target === modal) closeModal(modal.id);
    });
  });

  document.querySelectorAll('[data-copy]').forEach((button) => {
    button.addEventListener('click', () => copyText(button.dataset.copy || ''));
  });

  document.querySelectorAll('[data-scroll]').forEach((button) => {
    button.addEventListener('click', () => {
      const target = document.querySelector(button.dataset.scroll || '');
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  document.querySelectorAll('[data-share-invite]').forEach((button) => {
    button.addEventListener('click', () => {
      shareInvitation();
    });
  });

  document.querySelectorAll('[data-copy-url]').forEach((button) => {
    button.addEventListener('click', () => {
      copyText(getInvitationUrl());
    });
  });

  document.querySelectorAll('[data-lightbox-step]').forEach((button) => {
    button.addEventListener('click', () => {
      moveLightbox(Number(button.dataset.lightboxStep || 0));
    });
  });

  window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      document.querySelectorAll('.modal.is-open').forEach((modal) => closeModal(modal.id));
      return;
    }

    const lightboxOpen = document.getElementById('lightboxModal')?.classList.contains('is-open');
    if (!lightboxOpen) return;

    if (event.key === 'ArrowLeft') {
      moveLightbox(-1);
    }

    if (event.key === 'ArrowRight') {
      moveLightbox(1);
    }
  });
}

function setupGallery() {
  document.querySelectorAll('[data-gallery-index]').forEach((button) => {
    button.addEventListener('click', () => {
      renderLightbox(Number(button.dataset.galleryIndex || 0));
      openModal('lightboxModal');
    });
  });

  const visual = document.getElementById('lightboxVisual');
  if (!visual) return;

  visual.addEventListener(
    'touchstart',
    (event) => {
      const touch = event.touches[0];
      state.lightboxTouchStartX = touch.clientX;
      state.lightboxTouchStartY = touch.clientY;
    },
    { passive: true }
  );

  visual.addEventListener(
    'touchend',
    (event) => {
      const touch = event.changedTouches[0];
      const deltaX = touch.clientX - state.lightboxTouchStartX;
      const deltaY = touch.clientY - state.lightboxTouchStartY;

      if (Math.abs(deltaX) < 44 || Math.abs(deltaX) <= Math.abs(deltaY)) return;
      moveLightbox(deltaX < 0 ? 1 : -1);
    },
    { passive: true }
  );
}

function loadExternalScript(src) {
  return new Promise((resolve, reject) => {
    const existing = document.querySelector(`script[data-src="${src}"]`);
    if (existing) {
      existing.addEventListener('load', resolve, { once: true });
      existing.addEventListener(
        'error',
        () => reject(new Error(`Failed to load external script: ${src}`)),
        { once: true }
      );
      if (existing.dataset.loaded === 'true') resolve();
      return;
    }

    const script = document.createElement('script');
    script.src = src;
    script.async = true;
    script.dataset.src = src;
    script.addEventListener(
      'load',
      () => {
        script.dataset.loaded = 'true';
        resolve();
      },
      { once: true }
    );
    script.addEventListener(
      'error',
      () => reject(new Error(`Failed to load external script: ${src}`)),
      { once: true }
    );
    document.head.appendChild(script);
  });
}

function setVenueMapFallback(message) {
  const mapNode = document.getElementById('venueMap');
  if (!mapNode) return;
  mapNode.innerHTML = buildMapFallback(message);
}

async function setupVenueMap() {
  const mapNode = document.getElementById('venueMap');
  if (!mapNode) return;

  const { map } = invitationConfig.venue;
  const currentOrigin = window.location.origin;

  if (map.provider !== 'kakao') {
    setVenueMapFallback('현재는 카카오맵 연동만 준비되어 있습니다.');
    return;
  }

  if (window.location.protocol === 'file:') {
    setVenueMapFallback('카카오맵은 배포된 청첩장 주소에서 확인할 수 있습니다.');
    return;
  }

  if (!map.javascriptKey) {
    setVenueMapFallback('카카오맵 JavaScript 키가 설정되지 않았습니다.');
    return;
  }

  if (Array.isArray(map.allowedOrigins) && map.allowedOrigins.length > 0 && !map.allowedOrigins.includes(currentOrigin)) {
    setVenueMapFallback(`현재 접속 주소 ${currentOrigin}이 카카오맵 허용 도메인에 등록되어 있지 않습니다.`);
    return;
  }

  const sdkUrl = `https://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=${encodeURIComponent(map.javascriptKey)}&libraries=services`;

  try {
    await loadExternalScript(sdkUrl);
  } catch (error) {
    console.error('[Kakao Map] SDK load failed', {
      currentOrigin,
      message: error instanceof Error ? error.message : String(error)
    });
    setVenueMapFallback('카카오맵을 불러오지 못했습니다. 잠시 후 다시 시도해 주세요.');
    return;
  }

  if (!window.kakao?.maps?.load) {
    console.error('[Kakao Map] initialization API unavailable');
    setVenueMapFallback('카카오맵 초기화에 실패했습니다.');
    return;
  }

  window.kakao.maps.load(() => {
    if (!window.kakao?.maps?.services?.Geocoder) {
      console.error('[Kakao Map] geocoder unavailable');
      setVenueMapFallback('카카오맵 위치 검색 기능을 불러오지 못했습니다.');
      return;
    }

    const geocoder = new window.kakao.maps.services.Geocoder();

    geocoder.addressSearch(invitationConfig.venue.address, (result, status) => {
      if (status !== window.kakao.maps.services.Status.OK || !result?.length) {
        setVenueMapFallback('예식장 주소를 지도에서 찾지 못했습니다.');
        return;
      }

      const coords = new window.kakao.maps.LatLng(Number(result[0].y), Number(result[0].x));
      const kakaoMap = new window.kakao.maps.Map(mapNode, {
        center: coords,
        level: 4
      });
      const marker = new window.kakao.maps.Marker({
        map: kakaoMap,
        position: coords
      });
      const infoWindow = new window.kakao.maps.InfoWindow({
        content: `
          <div class="map-info-window">
            <strong>${escapeHtml(invitationConfig.venue.title)}</strong><br>
            <span>${escapeHtml(invitationConfig.venue.hall)}</span>
          </div>
        `
      });

      infoWindow.open(kakaoMap, marker);
    });
  });
}

function updateCountdownDisplay() {
  const parts = getCountdownParts(invitationConfig.event.dateIso);
  const fields = ['days', 'hours', 'minutes', 'seconds'];

  fields.forEach((key) => {
    const node = document.querySelector(`[data-countdown="${key}"]`);
    if (node) node.textContent = String(parts[key]).padStart(key === 'days' ? 1 : 2, '0');
  });

  const message = document.getElementById('countdownCopy');
  if (!message) return;

  if (parts.total > 0) {
    message.textContent = `${invitationConfig.couple.groomShort} ♥ ${invitationConfig.couple.brideShort} 결혼식까지 ${parts.days}일 남았습니다.`;
    return;
  }

  message.textContent = `${invitationConfig.couple.groomShort} ♥ ${invitationConfig.couple.brideShort} 결혼식이 시작되었습니다.`;
}

function setupCountdown() {
  window.clearInterval(state.countdownTimer);
  updateCountdownDisplay();
  state.countdownTimer = window.setInterval(updateCountdownDisplay, 1000);
}

function createSubmissionId() {
  if (window.crypto && typeof window.crypto.randomUUID === 'function') {
    return window.crypto.randomUUID();
  }

  return `rsvp-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function buildRsvpPayload(form) {
  const raw = Object.fromEntries(new FormData(form).entries());

  return {
    submissionId: createSubmissionId(),
    attendance: String(raw.attendance || ''),
    side: String(raw.side || ''),
    name: String(raw.name || '').trim(),
    count: String(raw.count || '1').trim(),
    phoneLast4: String(raw.phoneLast4 || '').trim(),
    createdAt: new Date().toISOString(),
    invitationUrl: getInvitationUrl(),
    pageUrl: window.location.href,
    userAgent: navigator.userAgent
  };
}

function getCachedRsvpResponse() {
  try {
    const raw = localStorage.getItem(invitationConfig.rsvp.lastResponseKey);
    return raw ? JSON.parse(raw) : null;
  } catch (error) {
    return null;
  }
}

function cacheRsvpResponse(payload) {
  localStorage.setItem(invitationConfig.rsvp.lastResponseKey, JSON.stringify(payload));
}

function applyRsvpResponse(form, payload) {
  if (!form || !payload) return;

  const fields = ['attendance', 'side'];
  fields.forEach((name) => {
    const value = String(payload[name] || '');
    const radio = form.querySelector(`input[name="${name}"][value="${value}"]`);
    if (radio) radio.checked = true;
  });

  const nameField = form.querySelector('input[name="name"]');
  const countField = form.querySelector('input[name="count"]');
  const phoneField = form.querySelector('input[name="phoneLast4"]');

  if (nameField) nameField.value = String(payload.name || '');
  if (countField) countField.value = String(payload.count || '1');
  if (phoneField) phoneField.value = String(payload.phoneLast4 || '');
}

async function submitRsvp(payload) {
  console.info('[RSVP] submit:start', {
    submissionId: payload.submissionId,
    endpoint: invitationConfig.rsvp.endpoint,
    attendance: payload.attendance,
    side: payload.side,
    count: payload.count
  });

  if (!invitationConfig.rsvp.endpoint) {
    const drafts = JSON.parse(localStorage.getItem(invitationConfig.rsvp.draftsKey) || '[]');
    drafts.push(payload);
    localStorage.setItem(invitationConfig.rsvp.draftsKey, JSON.stringify(drafts));
    console.info('[RSVP] submit:stored-locally', {
      submissionId: payload.submissionId
    });
    return 'local';
  }

  const response = await fetch(invitationConfig.rsvp.endpoint, {
    method: 'POST',
    mode: invitationConfig.rsvp.mode,
    cache: 'no-store',
    body: new URLSearchParams(payload)
  });

  console.info('[RSVP] submit:request-complete', {
    submissionId: payload.submissionId,
    responseType: response.type,
    status: response.status,
    note: invitationConfig.rsvp.mode === 'no-cors'
      ? 'no-cors 응답은 브라우저에서 본문을 확인할 수 없습니다.'
      : ''
  });

  if (invitationConfig.rsvp.mode !== 'no-cors' && response && !response.ok) {
    throw new Error('RSVP request failed');
  }

  return 'remote';
}

function setupRsvp() {
  const form = document.getElementById('rsvpForm');
  const submitButton = document.getElementById('rsvpSubmitButton');
  if (!form || !submitButton) return;

  applyRsvpResponse(form, getCachedRsvpResponse());

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const payload = buildRsvpPayload(form);

    submitButton.disabled = true;
    submitButton.textContent = '전송 중...';

    try {
      const result = await submitRsvp(payload);
      localStorage.setItem(invitationConfig.rsvp.doneKey, 'true');
      cacheRsvpResponse(payload);
      syncRsvpLabel();
      closeModal('rsvpModal');
      applyRsvpResponse(form, payload);
      showToast(result === 'remote' ? '응답이 정상 접수되었습니다.' : '현재 기기에 임시 저장되었습니다.');
    } catch (error) {
      console.error('[RSVP] submit:failed', {
        submissionId: payload.submissionId,
        error
      });
      showToast('응답을 보내지 못했습니다.');
    } finally {
      submitButton.disabled = false;
      submitButton.textContent = '체크 완료하기';
    }
  });
}

function mount() {
  renderApp();
  setupReveal();
  bindActions();
  setupGallery();
  setupVenueMap();
  setupCountdown();
  setupRsvp();
  syncRsvpLabel();
}

mount();
