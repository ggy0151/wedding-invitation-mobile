const invitationConfig = {
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
    address: '상세 주소는 추후 업데이트 예정입니다.',
    intro: '소중한 분들을 모시고 두 사람의 새로운 시작을 함께 나누고자 합니다.'
  },
  cover: {
    src: '',
    label: 'Wedding Portrait'
  },
  story: [
    {
      label: 'Groom',
      name: '소년 신윤찬',
      note: '신랑의 어린 시절 혹은 단독 사진을 이 자리에 넣어주세요.',
      imageLabel: 'Yoon Chan',
      src: ''
    },
    {
      label: 'Bride',
      name: '소녀 김지윤',
      note: '신부의 어린 시절 혹은 단독 사진을 이 자리에 넣어주세요.',
      imageLabel: 'Ji Yoon',
      src: ''
    }
  ],
  letters: [
    {
      title: '신랑 · 신부의 인사',
      body: '함께 보낼 날들에 대한 설렘을 안고\n따뜻한 가정을 이루겠습니다.\n저희의 첫걸음을 축복해 주세요.',
      signature: '윤찬 · 지윤 올림'
    },
    {
      title: '양가 부모님의 마음',
      body: '바르게 자라준 두 아이가 결실을 맺습니다.\n귀한 걸음 하셔서 자리를 빛내주시면\n더없는 기쁨으로 간직하겠습니다.',
      signature: '양가 부모님 일동'
    }
  ],
  gallery: [
    { title: 'Main Portrait', caption: '대표 사진이나 첫 장을 넣기 좋은 자리입니다.', imageLabel: 'Photo 01', src: '' },
    { title: 'A Warm Scene', caption: '잔잔한 감성의 세로 사진이 잘 어울립니다.', imageLabel: 'Photo 02', src: '' },
    { title: 'Our Mood', caption: '둘만의 분위기가 잘 드러나는 컷을 권장합니다.', imageLabel: 'Photo 03', src: '' },
    { title: 'The Day', caption: '베뉴, 부케, 반지 컷을 넣어도 예쁘게 이어집니다.', imageLabel: 'Photo 04', src: '' }
  ],
  venue: {
    title: '더블트리 바이 힐튼 서울 판교',
    hall: '예식 세부 홀 정보 업데이트 예정',
    badge: 'Pangyo / Seongnam',
    description: '상세 교통편과 홀 정보는 확인되는 대로 이어서 업데이트하겠습니다.',
    address: '상세 주소는 추후 업데이트 예정입니다.',
    transport: [
      {
        label: 'Venue',
        title: '더블트리 바이 힐튼 서울 판교',
        copy: '세부 홀 위치와 층수 정보는 확인 후 반영해 주세요.'
      },
      {
        label: 'Guide',
        title: '교통 정보 업데이트 예정',
        copy: '주소와 대중교통 안내가 준비되면 이 영역에 바로 연결할 수 있습니다.'
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
    mode: 'cors',
    doneKey: 'wedding_invitation_rsvp_done_v2',
    draftsKey: 'wedding_invitation_rsvp_drafts_v2',
    helper: '참석 여부를 먼저 받아야 하는 흐름에 맞춰 상단에서 바로 응답할 수 있게 두었습니다.'
  },
  accounts: [
    {
      group: '신랑측 마음 전하실 곳',
      hint: '신랑 신윤찬',
      open: true,
      items: [{ name: '신랑 신윤찬', bank: '계좌 정보 업데이트 예정', number: '추후 입력 예정' }]
    },
    {
      group: '신부측 마음 전하실 곳',
      hint: '신부 김지윤',
      open: false,
      items: [{ name: '신부 김지윤', bank: '계좌 정보 업데이트 예정', number: '추후 입력 예정' }]
    }
  ],
  notice: '식장 구조상 생화 화환은 반입이 정중히 제한되오니, 보내주시는 축복의 마음만 감사히 받겠습니다.'
};

const app = document.querySelector('#app');
const state = {
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

function englishWeddingDate(dateIso) {
  const date = new Date(dateIso);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const weekday = new Intl.DateTimeFormat('en-US', { weekday: 'short' }).format(date).toUpperCase();
  const hour = date.getHours();
  const minute = String(date.getMinutes()).padStart(2, '0');
  const suffix = hour >= 12 ? 'PM' : 'AM';
  const displayHour = hour % 12 === 0 ? 12 : hour % 12;
  return `${year}.${month}.${day} ${weekday} ${displayHour}:${minute} ${suffix}`;
}

function buildVisual(item, slot, extraClass = '') {
  if (item.src) {
    return `<img src="${escapeHtml(item.src)}" alt="${escapeHtml(item.title || item.name || item.label)}" loading="lazy">`;
  }

  return `
    <div class="${slot}-placeholder ${extraClass}">
      <div>
        <strong>${escapeHtml(item.imageLabel || item.label || item.title || 'Wedding')}</strong>
        <p>사진을 연결하면 이 자리에 실제 이미지가 보여집니다.</p>
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

  app.innerHTML = `
    <div class="page-shell">
      <main class="page">
        <section class="section reply-first reveal" id="reply-first">
          <span class="mini-label">RSVP FIRST</span>
          <h2 class="reply-title">참석 여부를 먼저 알려주세요</h2>
          <p class="reply-copy">좌석과 식사 안내를 위해 가장 먼저 응답을 받을 수 있게 상단에 배치했습니다.</p>
          <div class="reply-actions">
            <button class="button primary" type="button" data-open-rsvp>${rsvpLabel}</button>
            <button class="button outline" type="button" data-share>청첩장 공유</button>
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
                <p class="cover-meta">${englishWeddingDate(invitationConfig.event.dateIso)}</p>
                <p class="cover-location">${escapeHtml(invitationConfig.event.venueEnglish)}</p>
              </div>
            </div>
          </div>
          <div class="cover-actions">
            <a class="button-link ghost" href="#venue">오시는 길</a>
            <button class="button ghost" type="button" data-scroll="#accounts">마음 전하기</button>
          </div>
        </section>

        <section class="section save-date reveal">
          <span class="date-pill">SAVE THE DATE · ${countdownLabel(invitationConfig.event.dateIso)}</span>
          <div class="date-lines">
            <p class="date-main">${escapeHtml(invitationConfig.event.dateKorean)}</p>
            <p class="copy">${escapeHtml(invitationConfig.event.venueShort)}</p>
            <p class="copy">${escapeHtml(invitationConfig.event.address)}</p>
          </div>
        </section>

        <section class="section section--spaced reveal">
          <div class="envelope-visual" aria-hidden="true">
            <div class="envelope-card">
              <small>YOU'RE INVITED TO</small>
              <strong>Our Wedding</strong>
              <small>${escapeHtml(invitationConfig.event.dateLabel)} · 12:30 PM</small>
            </div>
          </div>
          <p class="note-script">사랑이 별건 것이 아니라<br>그 사람과 함께 늙어가고 싶은 것입니다.<br>저희의 새로운 계절에<br>따뜻한 걸음으로 함께해 주세요.</p>
        </section>

        <section class="section section--spaced reveal">
          <span class="mini-label">GROWING UP</span>
          <h2 class="section-title">소중한 시절의 우리</h2>
          <p class="section-copy">샘플처럼 하나의 흐름 속에서 자연스럽게 사진이 이어지도록 구성했습니다.</p>
          <div class="story-strip">
            ${buildStory()}
          </div>
        </section>

        <section class="section section--spaced reveal">
          <span class="mini-label">LETTER</span>
          <h2 class="section-title">진심을 담은 편지</h2>
          <div class="letter-stack">
            ${buildLetters()}
          </div>
        </section>

        <section class="section section--spaced reveal" id="gallery">
          <span class="mini-label">GALLERY</span>
          <h2 class="section-title">우리의 장면들</h2>
          <p class="section-copy">카드 여러 장이 아니라 사진이 쌓이듯 이어지는 흐름으로 바꿨습니다.</p>
          <div class="gallery-flow">
            ${buildGallery()}
          </div>
        </section>

        <section class="section section--spaced reveal" id="venue">
          <span class="mini-label">LOCATION</span>
          <h2 class="section-title">오시는 길</h2>
          <div class="venue-block">
            <div class="map-visual">
              <div class="map-copy">
                <div>
                  <small>${escapeHtml(invitationConfig.venue.badge)}</small>
                  <strong>Way</strong>
                </div>
                <div>
                  <p>${escapeHtml(invitationConfig.venue.description)}</p>
                </div>
              </div>
            </div>
            <p class="venue-address"><strong class="venue-title">${escapeHtml(invitationConfig.venue.title)}</strong><br>${escapeHtml(invitationConfig.venue.hall)}<br>${escapeHtml(invitationConfig.venue.address)}</p>
            <div class="venue-links">${buildVenueLinks()}</div>
            <div class="transport-list">${buildTransport()}</div>
          </div>
        </section>

        <section class="section section--spaced reveal" id="accounts">
          <span class="mini-label">HEART</span>
          <h2 class="section-title">마음 전하실 곳</h2>
          <div class="account-wrap">${buildAccounts()}</div>
          <div class="share-actions">
            <button class="button primary" type="button" data-share>카카오톡으로 공유하기</button>
            <button class="button outline" type="button" data-copy="${escapeHtml(window.location.href)}">청첩장 주소 복사하기</button>
          </div>
          <p class="notice-copy">${escapeHtml(invitationConfig.notice)}</p>
        </section>

        <footer class="footer reveal">
          <p class="footer-copy">${escapeHtml(invitationConfig.couple.groomShort)} · ${escapeHtml(invitationConfig.couple.brideShort)} wedding invitation</p>
        </footer>
      </main>

      <div class="sticky-bar">
        <div class="sticky-grid">
          <button class="sticky-button" type="button" data-open-rsvp>
            <strong>참석여부</strong>
            <span>먼저 응답</span>
          </button>
          <button class="sticky-button" type="button" data-scroll="#venue">
            <strong>오시는 길</strong>
            <span>장소 보기</span>
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
              <h2 class="modal-title">참석 여부를 알려주세요</h2>
            </div>
            <button class="close-button" type="button" data-close-modal="rsvpModal" aria-label="닫기">×</button>
          </div>
          <p class="rsvp-copy">${escapeHtml(invitationConfig.rsvp.helper)}</p>
          <form id="rsvpForm" class="form-grid">
            <div>
              <label class="field-label">참석 여부</label>
              <div class="choice-grid">
                <label class="choice-card">
                  <input type="radio" name="attendance" value="참석 가능" checked>
                  <span>참석 가능</span>
                </label>
                <label class="choice-card">
                  <input type="radio" name="attendance" value="조율 필요">
                  <span>조율 필요</span>
                </label>
              </div>
            </div>
            <div>
              <label class="field-label">어느 쪽 하객이신가요?</label>
              <div class="choice-grid">
                <label class="choice-card">
                  <input type="radio" name="side" value="신랑측" required>
                  <span>신랑측</span>
                </label>
                <label class="choice-card">
                  <input type="radio" name="side" value="신부측" required>
                  <span>신부측</span>
                </label>
              </div>
            </div>
            <div>
              <label class="field-label" for="guestName">성함</label>
              <input class="field-input" id="guestName" name="name" type="text" placeholder="성함을 입력해주세요" required>
            </div>
            <div>
              <label class="field-label" for="guestCount">참석 인원</label>
              <input class="field-input" id="guestCount" name="count" type="number" min="1" value="1" required>
            </div>
            <div>
              <label class="field-label" for="guestMeal">식사 선호</label>
              <select class="field-select" id="guestMeal" name="meal" required>
                <option value="">선택해주세요</option>
                <option value="육류코스">육류코스</option>
                <option value="생선코스">생선코스</option>
              </select>
            </div>
            <div>
              <label class="field-label" for="guestMessage">축하 메시지</label>
              <textarea class="field-textarea" id="guestMessage" name="message" placeholder="남기고 싶은 메시지를 적어주세요"></textarea>
            </div>
            <button class="button primary" type="submit" id="rsvpSubmitButton">응답 보내기</button>
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

  document.querySelectorAll('[data-share]').forEach((button) => {
    button.addEventListener('click', async () => {
      const payload = {
        title: '신윤찬 · 김지윤 결혼합니다',
        text: '2026년 12월 20일 일요일 오후 12시 30분, 더블트리 바이 힐튼 서울 판교에서 뵙겠습니다.',
        url: window.location.href
      };

      try {
        if (navigator.share) {
          await navigator.share(payload);
        } else {
          await copyText(window.location.href);
        }
      } catch (error) {
        if (error?.name !== 'AbortError') {
          showToast('공유를 완료하지 못했습니다.');
        }
      }
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
                <p>사진을 연결하면 확대 보기에서도 같은 이미지가 보여집니다.</p>
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

function setupRsvp() {
  const form = document.getElementById('rsvpForm');
  const submitButton = document.getElementById('rsvpSubmitButton');
  if (!form || !submitButton) return;

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const payload = Object.fromEntries(new FormData(form).entries());
    payload.createdAt = new Date().toISOString();

    submitButton.disabled = true;
    submitButton.textContent = '전송 중...';

    try {
      if (invitationConfig.rsvp.endpoint) {
        const response = await fetch(invitationConfig.rsvp.endpoint, {
          method: 'POST',
          mode: invitationConfig.rsvp.mode,
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });
        if (invitationConfig.rsvp.mode !== 'no-cors' && response && !response.ok) {
          throw new Error('RSVP request failed');
        }
      } else {
        const drafts = JSON.parse(localStorage.getItem(invitationConfig.rsvp.draftsKey) || '[]');
        drafts.push(payload);
        localStorage.setItem(invitationConfig.rsvp.draftsKey, JSON.stringify(drafts));
      }

      localStorage.setItem(invitationConfig.rsvp.doneKey, 'true');
      syncRsvpLabel();
      closeModal('rsvpModal');
      form.reset();
      showToast(invitationConfig.rsvp.endpoint ? '응답이 접수되었습니다.' : '기기 내 임시 저장이 완료되었습니다.');
    } catch (error) {
      showToast('응답을 보내지 못했습니다.');
    } finally {
      submitButton.disabled = false;
      submitButton.textContent = '응답 보내기';
    }
  });
}

function mount() {
  renderApp();
  setupReveal();
  bindActions();
  setupGallery();
  setupAccounts();
  setupRsvp();
  syncRsvpLabel();
}

mount();
