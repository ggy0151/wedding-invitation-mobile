const invitationConfig = {
  site: {
    liveUrl: 'https://ggy0151.github.io/wedding-invitation-mobile/',
    shareTitle: '윤찬 ♥ 지윤 결혼합니다',
    shareText: '2026년 12월 20일 일요일 오후 12시 30분, 더블트리 바이 힐튼 서울 판교에서 뵙겠습니다.'
  },
  couple: {
    groomFull: '유윤찬',
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
    address: '경기 성남시 분당구 백현로 26 더블트리 바이 힐튼 서울 판교',
    intro: '소중한 분들을 모시고 저희의 새로운 시작을 함께 나누고자 합니다.'
  },
  cover: {
    src: '',
    label: 'Wedding Portrait'
  },
  story: [
    {
      label: 'Groom',
      name: '신랑 유윤찬',
      note: '어릴 적 사진 또는 추억이 담긴 이미지를 연결해 주세요.',
      imageLabel: 'Yoon Chan',
      src: ''
    },
    {
      label: 'Bride',
      name: '신부 김지윤',
      note: '어릴 적 사진 또는 추억이 담긴 이미지를 연결해 주세요.',
      imageLabel: 'Ji Yoon',
      src: ''
    }
  ],
  letters: [
    {
      title: '신랑 신부 인사',
      body: '함께 보낼 나날들을 약속하며\n소중한 분들께 가장 먼저 소식을 전합니다.\n따스한 축복으로 함께해 주세요.',
      signature: '윤찬 ♥ 지윤 드림'
    },
    {
      title: '양가 부모님 마음',
      body: '바르게 자라준 두 아이가 결혼을 맞이합니다.\n귀한 걸음 해주시는 마음을 오래도록 감사히 간직하겠습니다.',
      signature: '양가 부모님 일동'
    }
  ],
  gallery: [
    { title: 'Main Portrait', caption: '대표 사진이나 메인 컷을 넣기 좋은 자리입니다.', imageLabel: 'Photo 01', src: '' },
    { title: 'A Warm Scene', caption: '잔잔한 감성의 서브 컷을 채워 넣어보세요.', imageLabel: 'Photo 02', src: '' },
    { title: 'Our Mood', caption: '두 분의 분위기가 잘 느껴지는 장면을 권합니다.', imageLabel: 'Photo 03', src: '' },
    { title: 'The Day', caption: '베뉴, 부케, 반지 컷 등을 이어서 배치할 수 있습니다.', imageLabel: 'Photo 04', src: '' }
  ],
  venue: {
    title: '더블트리 바이 힐튼 서울 판교',
    hall: '1층 그랜드볼룸',
    badge: 'Grand Ballroom / 1F',
    description: '호텔 1층 그랜드볼룸홀에서 예식을 진행합니다. 실제 위치를 확인할 수 있도록 카카오맵 기반 지도를 연결할 수 있게 준비했습니다.',
    address: '경기 성남시 분당구 백현로 26 더블트리 바이 힐튼 서울 판교',
    roadAddress: '26 Baekhyeon-ro, Bundang-gu, Seongnam-si, Gyeonggi-do 13553',
    placeName: '더블트리 바이 힐튼 서울 판교 1층 그랜드볼룸',
    map: {
      provider: 'kakao',
      javascriptKey: '',
      fallbackMessage: '카카오맵 JavaScript 키를 넣으면 이 영역에 실제 지도가 표시됩니다.'
    },
    transport: [
      {
        label: 'Venue',
        title: '더블트리 바이 힐튼 서울 판교 1층 그랜드볼룸',
        copy: '공식 웨딩 안내 기준으로 Grand Ballroom은 1층에 있습니다.'
      },
      {
        label: 'Guide',
        title: '경기 성남시 분당구 백현로 26',
        copy: '호텔 정문 입장 후 1층 그랜드볼룸 방향 안내를 따라 이동하시면 됩니다.'
      }
    ],
    links: [
      { label: '티맵', href: 'tmap://search?name=더블트리%20바이%20힐튼%20서울%20판교' },
      { label: '카카오내비', href: 'kakaonavi://search?name=더블트리%20바이%20힐튼%20서울%20판교' },
      { label: '네이버지도', href: 'nmap://search?query=더블트리%20바이%20힐튼%20서울%20판교' }
    ]
  },
  rsvp: {
    endpoint: '',
    mode: 'no-cors',
    doneKey: 'wedding_invitation_rsvp_done_v2',
    draftsKey: 'wedding_invitation_rsvp_drafts_v2',
    helper: '한 분 한 분을 소중히 모실 수 있도록 참석 의사를 미리 남겨주시면 감사하겠습니다.'
  },
  accounts: [
    {
      group: '신랑측 마음 전하실 곳',
      hint: '신랑 유윤찬',
      open: true,
      items: [{ name: '신랑 유윤찬', bank: '계좌 정보 업데이트 예정', number: '추후 입력 예정' }]
    },
    {
      group: '신부측 마음 전하실 곳',
      hint: '신부 김지윤',
      open: false,
      items: [{ name: '신부 김지윤', bank: '계좌 정보 업데이트 예정', number: '추후 입력 예정' }]
    }
  ],
  notice: '예식 구조상 화환은 정중히 사양하며, 보내주시는 축하의 마음만 감사히 받겠습니다.'
};

const app = document.querySelector('#app');
const state = {
  countdownTimer: null,
  toastTimer: null
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
            <p class="section-copy">${escapeHtml(item.note)}</p>
          </div>
        </article>
      `
    )
    .join('');
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
        <button class="gallery-button" type="button" data-gallery-index="${index}">
          <div class="gallery-slide">
            ${buildVisual(item, 'gallery')}
            <div class="gallery-caption">
              <small>Scene ${String(index + 1).padStart(2, '0')}</small>
              <strong>${escapeHtml(item.title)}</strong>
              <p class="section-copy">${escapeHtml(item.caption)}</p>
            </div>
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
      (group, index) => `
        <section class="account-group ${group.open ? 'is-open' : ''}">
          <button class="account-trigger" type="button" data-account-toggle="${index}" aria-expanded="${group.open ? 'true' : 'false'}">
            <div>
              <small>Account</small>
              <strong class="account-title">${escapeHtml(group.group)}</strong>
              <p class="account-copy">${escapeHtml(group.hint)}</p>
            </div>
            <span class="account-symbol">+</span>
          </button>
          <div class="account-panel">
            ${group.items
              .map(
                (item) => `
                  <article class="account-item">
                    <div>
                      <small>${escapeHtml(item.bank)}</small>
                      <strong class="account-name">${escapeHtml(item.name)}</strong>
                      <p class="account-copy">${escapeHtml(item.number)}</p>
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
          <p class="reply-copy">좌석과 식순 안내를 위해 가장 먼저 답변을 받을 수 있도록 상단에 배치했습니다.</p>
          <div class="reply-actions">
            <button class="button primary" type="button" data-open-rsvp>${rsvpLabel}</button>
          </div>
        </section>

        <section class="section cover reveal" id="top">
          <div class="cover-frame">
            <div class="cover-visual">
              ${buildVisual(invitationConfig.cover, 'cover')}
              <div class="cover-names">
                <span>신랑 ${escapeHtml(invitationConfig.couple.groomFull)}</span>
                <span>신부 ${escapeHtml(invitationConfig.couple.brideFull)}</span>
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
          <span class="mini-label">WEDDING DAY</span>
          <h2 class="section-title">결혼식까지 남은 시간</h2>
          <p class="section-copy">${escapeHtml(invitationConfig.event.dateKorean)}<br>${escapeHtml(formatEnglishDate(invitationConfig.event.dateIso))}</p>
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
          <div class="envelope-visual" aria-hidden="true">
            <div class="envelope-card">
              <small>YOU'RE INVITED TO</small>
              <strong>Our Wedding</strong>
              <small>${escapeHtml(invitationConfig.event.dateLabel)} · 12:30 PM</small>
            </div>
          </div>
          <p class="note-script">벅찬 행복이 아닌<br>그 사람과 매일을 닮아가는 것이<br>사랑의 새로운 계절이라 믿습니다.<br>따스한 걸음으로 함께해 주세요.</p>
        </section>

        <section class="section section--spaced reveal">
          <span class="mini-label">GROWING UP</span>
          <h2 class="section-title">함께 자라온 시간</h2>
          <p class="section-copy">필름처럼 하나의 흐름 안에서 자연스럽게 사진이 이어지도록 구성했습니다.</p>
          <div class="story-strip">
            ${buildStory()}
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
          <p class="section-copy">카드가 아닌 사진의 흐름이 이어지는 느낌으로 배치했습니다.</p>
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
            <p class="venue-address"><strong class="venue-title">${escapeHtml(invitationConfig.venue.title)}</strong><br>${escapeHtml(invitationConfig.venue.hall)}<br>${escapeHtml(invitationConfig.venue.address)}</p>
            <p class="section-copy">${escapeHtml(invitationConfig.venue.roadAddress)}</p>
            <div class="venue-links">${buildVenueLinks()}</div>
            <div class="transport-list">${buildTransport()}</div>
          </div>
        </section>

        <section class="section section--spaced reveal" id="accounts">
          <span class="mini-label">HEART</span>
          <h2 class="section-title">마음 전하실 곳</h2>
          <div class="account-wrap">${buildAccounts()}</div>
          <p class="notice-copy">${escapeHtml(invitationConfig.notice)}</p>
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
          <p class="rsvp-copy">${escapeHtml(invitationConfig.rsvp.helper)}</p>
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
              <label class="field-label" for="guestPhoneLast4">동명이인 체크를 위한 번호를 알려주세요</label>
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
        <div class="modal-sheet">
          <div class="modal-head">
            <div>
              <span class="mini-label">GALLERY</span>
              <h2 class="modal-title" id="lightboxTitle">사진 보기</h2>
            </div>
            <button class="close-button" type="button" data-close-modal="lightboxModal" aria-label="닫기">×</button>
          </div>
          <div class="lightbox-visual" id="lightboxVisual"></div>
          <p class="lightbox-caption copy" id="lightboxCaption"></p>
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

  window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      document.querySelectorAll('.modal.is-open').forEach((modal) => closeModal(modal.id));
    }
  });
}

function setupGallery() {
  document.querySelectorAll('[data-gallery-index]').forEach((button) => {
    button.addEventListener('click', () => {
      const item = invitationConfig.gallery[Number(button.dataset.galleryIndex || 0)];
      document.getElementById('lightboxTitle').textContent = item.title;
      document.getElementById('lightboxCaption').textContent = item.caption;
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
      openModal('lightboxModal');
    });
  });
}

function setupAccounts() {
  document.querySelectorAll('[data-account-toggle]').forEach((button) => {
    button.addEventListener('click', () => {
      const group = button.closest('.account-group');
      if (!group) return;
      const open = group.classList.toggle('is-open');
      button.setAttribute('aria-expanded', String(open));
    });
  });
}

function loadExternalScript(src) {
  return new Promise((resolve, reject) => {
    const existing = document.querySelector(`script[data-src="${src}"]`);
    if (existing) {
      existing.addEventListener('load', resolve, { once: true });
      existing.addEventListener('error', reject, { once: true });
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
    script.addEventListener('error', reject, { once: true });
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
  if (map.provider !== 'kakao') {
    setVenueMapFallback('현재는 카카오맵 연동만 준비되어 있습니다.');
    return;
  }

  if (!map.javascriptKey) {
    setVenueMapFallback('카카오맵 JavaScript 키를 invitationConfig.venue.map.javascriptKey에 넣으면 실제 지도가 표시됩니다.');
    return;
  }

  const sdkUrl = `https://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=${encodeURIComponent(map.javascriptKey)}&libraries=services`;

  try {
    await loadExternalScript(sdkUrl);
  } catch (error) {
    setVenueMapFallback('카카오맵 SDK를 불러오지 못했습니다. 도메인 등록과 키 설정을 확인해 주세요.');
    return;
  }

  if (!window.kakao?.maps?.load || !window.kakao?.maps?.services?.Geocoder) {
    setVenueMapFallback('카카오맵 SDK 초기화에 실패했습니다.');
    return;
  }

  window.kakao.maps.load(() => {
    const geocoder = new window.kakao.maps.services.Geocoder();

    geocoder.addressSearch(invitationConfig.venue.address, (result, status) => {
      if (status !== window.kakao.maps.services.Status.OK || !result?.length) {
        setVenueMapFallback('주소를 지도 좌표로 찾지 못했습니다. 주소 표기를 다시 확인해 주세요.');
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

function buildRsvpPayload(form) {
  const raw = Object.fromEntries(new FormData(form).entries());

  return {
    attendance: String(raw.attendance || ''),
    side: String(raw.side || ''),
    name: String(raw.name || '').trim(),
    phoneLast4: String(raw.phoneLast4 || '').trim(),
    createdAt: new Date().toISOString(),
    invitationUrl: getInvitationUrl(),
    pageUrl: window.location.href,
    userAgent: navigator.userAgent
  };
}

async function submitRsvp(payload) {
  if (!invitationConfig.rsvp.endpoint) {
    const drafts = JSON.parse(localStorage.getItem(invitationConfig.rsvp.draftsKey) || '[]');
    drafts.push(payload);
    localStorage.setItem(invitationConfig.rsvp.draftsKey, JSON.stringify(drafts));
    return 'local';
  }

  const response = await fetch(invitationConfig.rsvp.endpoint, {
    method: 'POST',
    mode: invitationConfig.rsvp.mode,
    cache: 'no-store',
    body: new URLSearchParams(payload)
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

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const payload = buildRsvpPayload(form);

    submitButton.disabled = true;
    submitButton.textContent = '전송 중...';

    try {
      const result = await submitRsvp(payload);
      localStorage.setItem(invitationConfig.rsvp.doneKey, 'true');
      syncRsvpLabel();
      closeModal('rsvpModal');
      form.reset();
      const defaultAttendance = form.querySelector('input[name="attendance"][value="참석할게요"]');
      if (defaultAttendance) defaultAttendance.checked = true;
      showToast(result === 'remote' ? '응답이 정상 접수되었습니다.' : '현재 기기에 임시 저장되었습니다.');
    } catch (error) {
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
  setupAccounts();
  setupVenueMap();
  setupCountdown();
  setupRsvp();
  syncRsvpLabel();
}

mount();
