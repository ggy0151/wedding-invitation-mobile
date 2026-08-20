const invitationConfig = {
  site: {
    liveUrl: 'https://ggy0151.github.io/wedding-invitation-mobile/',
    shareTitle: '윤찬 ♥ 지윤 결혼합니다',
    shareText: '2026년 12월 20일 일요일 오후 12시 30분, 더블트리 바이 힐튼 서울 판교에서 뵙겠습니다.',
    shareImageUrl: 'https://ggy0151.github.io/wedding-invitation-mobile/assets/og-share-full.jpg?v=20260815-1'
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
    address: '경기 성남시 분당구 백현로 26',
    intro: '소중한 분들을 모시고\n저희의 새로운 시작을 함께 나누고자 합니다.'
  },
  cover: {
    src: './assets/KakaoTalk_20260806_072904893_07.jpg',
    label: 'Wedding Portrait beneath the Arch'
  },
  familyLines: [
    { parents: '신영호 · 조혜경', relation: '의 아들', role: '신랑', name: '윤찬' },
    { parents: '김광주 · 유미경', relation: '의 딸', role: '신부', name: '지윤' }
  ],
  story: [
    {
      label: 'Groom',
      name: '신랑 신윤찬',
      imageLabel: 'Yunchan',
      images: [
        './assets/groom-childhood.jpg',
        './assets/groom-childhood2.jpg'
      ]
    },
    {
      label: 'Bride',
      name: '신부 김지윤',
      imageLabel: 'Jiyun',
      images: [
        './assets/bride-childhood.jpg',
        './assets/bride-childchood2.jpg'
      ]
    }
  ],
  familyArchive: [
    {
      side: '신랑 가족',
      label: "YUNCHAN'S FAMILY",
      title: '윤찬이의 가족',
      caption: '윤찬이가 사랑받으며 자라온 가족의 한 장면입니다.',
      src: './assets/groom-family.jpg'
    },
    {
      side: '신부 가족',
      label: "JIYUN'S FAMILY",
      title: '지윤이의 가족',
      caption: '지윤이가 사랑받으며 자라온 가족의 한 장면입니다.',
      src: './assets/bride family photo.jpg'
    }
  ],
  contacts: [
    {
      side: '신랑 측',
      people: [
        { role: '신랑', name: '신윤찬', phone: '010-5786-9386' },
        { role: '아버지', name: '신영호', phone: '010-4855-6797' },
        { role: '어머니', name: '조혜경', phone: '010-4727-6797' }
      ]
    },
    {
      side: '신부 측',
      people: [
        { role: '신부', name: '김지윤', phone: '010-5253-6785' },
        { role: '아버지', name: '김광주', phone: '010-6367-6785' },
        { role: '어머니', name: '유미경', phone: '010-9311-6785' }
      ]
    }
  ],
  letters: [
    {
      title: '두 사람이 전하는 마음',
      body: '서로의 가장 좋은 친구로 함께해 온 저희가\n이제 부부로서 새로운 길을 시작합니다.\n귀한 걸음으로 함께해 주시고\n앞날을 따뜻하게 축복해 주세요.',
      signature: '윤찬 · 지윤 드림'
    },
    {
      title: '부모가 전하는 마음',
      body: '사랑으로 키운 두 아이가\n서로를 아끼는 한 가정을 이루려 합니다.\n두 사람의 앞날을 따뜻한 마음으로\n축복해 주시면 감사하겠습니다.',
      signature: '양가 부모 드림'
    }
  ],
  gallery: [
    { title: '우리의 메인 커버', caption: '청첩장 메인 커버 사진입니다.', imageLabel: 'Main Cover', src: './assets/main cover.jpg' },
    { title: '우리의 순간', caption: '보정된 웨딩 사진입니다.', imageLabel: 'Retouched Scene 01', src: './assets/KakaoTalk_20260806_072904893.jpg' },
    { title: '우리의 순간', caption: '보정된 웨딩 사진입니다.', imageLabel: 'Retouched Scene 02', src: './assets/KakaoTalk_20260806_072904893_01.jpg' },
    { title: '우리의 순간', caption: '보정된 웨딩 사진입니다.', imageLabel: 'Retouched Scene 03', src: './assets/KakaoTalk_20260806_072904893_03.jpg' },
    { title: '우리의 순간', caption: '보정된 웨딩 사진입니다.', imageLabel: 'Retouched Scene 04', src: './assets/KakaoTalk_20260806_072904893_04.jpg' },
    { title: '우리의 순간', caption: '보정된 웨딩 사진입니다.', imageLabel: 'Retouched Scene 05', src: './assets/KakaoTalk_20260806_072904893_05.jpg' },
    { title: '우리의 순간', caption: '보정된 웨딩 사진입니다.', imageLabel: 'Retouched Scene 06', src: './assets/KakaoTalk_20260806_072904893_06.jpg' },
    { title: '우리의 순간', caption: '보정된 웨딩 사진입니다.', imageLabel: 'Retouched Scene 07', src: './assets/KakaoTalk_20260806_072904893_07.jpg' },
    { title: '우리의 순간', caption: '보정된 웨딩 사진입니다.', imageLabel: 'Retouched Scene 08', src: './assets/KakaoTalk_20260806_072904893_08.jpg' },
    { title: '우리의 순간', caption: '보정된 웨딩 사진입니다.', imageLabel: 'Retouched Scene 09', src: './assets/KakaoTalk_20260806_072904893_09.jpg' },
    { title: '우리의 순간', caption: '보정된 웨딩 사진입니다.', imageLabel: 'Retouched Scene 10', src: './assets/KakaoTalk_20260806_072904893_10.jpg' },
    { title: '우리의 순간', caption: '보정된 웨딩 사진입니다.', imageLabel: 'Retouched Scene 11', src: './assets/KakaoTalk_20260806_072904893_11.jpg' },
    { title: '우리의 순간', caption: '보정된 웨딩 사진입니다.', imageLabel: 'Retouched Scene 12', src: './assets/KakaoTalk_20260806_072904893_12.jpg' },
    { title: '우리의 순간', caption: '보정된 웨딩 사진입니다.', imageLabel: 'Retouched Scene 13', src: './assets/KakaoTalk_20260806_072904893_13.jpg' },
    { title: '우리의 순간', caption: '보정된 웨딩 사진입니다.', imageLabel: 'Retouched Scene 14', src: './assets/KakaoTalk_20260806_072904893_14.jpg' },
    { title: '우리의 순간', caption: '보정된 웨딩 사진입니다.', imageLabel: 'Retouched Scene 15', src: './assets/KakaoTalk_20260806_072904893_15.jpg' },
    { title: '우리의 순간', caption: '보정된 웨딩 사진입니다.', imageLabel: 'Retouched Scene 16', src: './assets/KakaoTalk_20260806_072904893_16.jpg' },
    { title: '우리의 순간', caption: '보정된 웨딩 사진입니다.', imageLabel: 'Retouched Scene 17', src: './assets/KakaoTalk_20260806_072904893_17.jpg' },
    { title: '우리의 순간', caption: '보정된 웨딩 사진입니다.', imageLabel: 'Retouched Scene 18', src: './assets/SON00034-1.jpg' },
    { title: '우리의 순간', caption: '보정된 웨딩 사진입니다.', imageLabel: 'Retouched Scene 19', src: './assets/SON03236-1.jpg' },
    { title: '우리의 순간', caption: '기존 갤러리에 함께했던 웨딩 사진입니다.', imageLabel: 'Previous Scene 01', src: './assets/KakaoTalk_20260730_221404933_01.jpg' },
    { title: '우리의 순간', caption: '기존 갤러리에 함께했던 웨딩 사진입니다.', imageLabel: 'Previous Scene 02', src: './assets/KakaoTalk_20260730_221404933_02.jpg' },
    { title: '우리의 순간', caption: '기존 갤러리에 함께했던 웨딩 사진입니다.', imageLabel: 'Previous Scene 03', src: './assets/KakaoTalk_20260730_221404933_06.jpg' },
    { title: '우리의 순간', caption: '기존 갤러리에 함께했던 웨딩 사진입니다.', imageLabel: 'Previous Scene 04', src: './assets/KakaoTalk_20260802_222009937.jpg' },
    { title: '우리의 순간', caption: '기존 갤러리에 함께했던 웨딩 사진입니다.', imageLabel: 'Previous Scene 05', src: './assets/KakaoTalk_20260802_222054901.jpg' },
    { title: '우리의 순간', caption: '기존 갤러리에 함께했던 웨딩 사진입니다.', imageLabel: 'Previous Scene 06', src: './assets/KakaoTalk_20260804_070813031.jpg' },
    { title: '우리의 순간', caption: '기존 갤러리에 함께했던 웨딩 사진입니다.', imageLabel: 'Previous Scene 08', src: './assets/SSN00096.JPG' },
    { title: '우리의 순간', caption: '기존 갤러리에 함께했던 웨딩 사진입니다.', imageLabel: 'Previous Scene 09', src: './assets/SSN00225.JPG' },
    { title: '우리의 순간', caption: '기존 갤러리에 함께했던 웨딩 사진입니다.', imageLabel: 'Previous Scene 11', src: './assets/SSN00344.JPG' },
    { title: '우리의 순간', caption: '기존 갤러리에 함께했던 웨딩 사진입니다.', imageLabel: 'Previous Scene 12', src: './assets/SSN00413.JPG' },
    { title: '우리의 순간', caption: '기존 갤러리에 함께했던 웨딩 사진입니다.', imageLabel: 'Previous Scene 13', src: './assets/SSN00524.JPG' }
  ],
  venue: {
    title: '더블트리 바이 힐튼 서울 판교',
    hall: '1층 그랜드볼룸홀',
    badge: 'Grand Ballroom / 1F',
    description: '호텔 1층 그랜드볼룸홀에서 예식을 진행합니다.\n아래 내비게이션 버튼으로 바로 길안내를 열 수 있습니다.',
    address: '경기 성남시 분당구 백현로 26',
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
        label: '지하철 Subway',
        title: '수인분당선 수내역 3번 출구 · 도보 약 20분',
        copy: '수내역 3번 출구에서 호텔까지 도보로 약 20분 소요됩니다.'
      },
      {
        label: '시내버스 Bus',
        title: '일반 버스 220 · 310 · 370 · 누리 4',
        copy: '마을 버스 117',
        isBus: true
      },
      {
        label: '전세버스 Chartered Bus',
        title: '창원 출발 전세버스',
        copy: '탑승 장소: 만남의 광장 앞\n경남 창원시 성산구 원이대로 450\n탑승 시간: 예식 당일 오전 8시'
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
    endpoint: 'https://script.google.com/macros/s/AKfycbxW7JvIYWkHdJ0nXwdaPR7QHn4Eu6s_2QfAx718y1osivEPz8p5t9P1e5crTAd6vDl2/exec',
    mode: 'no-cors',
    doneKey: 'wedding_invitation_rsvp_done_v2',
    draftsKey: 'wedding_invitation_rsvp_drafts_v2',
    lastResponseKey: 'wedding_invitation_rsvp_last_response_v1',
    helper: '한 분 한 분을 정성껏 모시고 싶습니다.\n참석 여부를 미리 남겨주시면 감사하겠습니다.',
    mealNotice: '식사는 참석 인원에 맞춰 준비됩니다.'
  },
  guestbook: {
    endpoint: 'https://script.google.com/macros/s/AKfycbxW7JvIYWkHdJ0nXwdaPR7QHn4Eu6s_2QfAx718y1osivEPz8p5t9P1e5crTAd6vDl2/exec',
    limit: 6
  },
  accounts: [
    {
      group: '신랑 측 마음 전하실 곳',
      items: [
        { name: '신랑 신윤찬', bank: '국민은행', number: '075210660157' },
        { name: '신랑 부 신영호', bank: '우리은행', number: '011-109480-02-001' },
        { name: '신랑 모 조혜경', bank: '국민은행', number: '43340101229584' }
      ]
    },
    {
      group: '신부 측 마음 전하실 곳',
      items: [
        { name: '신부 김지윤', bank: '신한은행', number: '110455998600' },
        { name: '신부 부 김광주', bank: '신한은행', number: '110258239647' },
        { name: '신부 모 유미경', bank: '경남은행', number: '671210149913' }
      ]
    }
  ],
  accountsNotice: '참석이 어려워 직접 축하를 전하지 못하시는\n분들을 위해 계좌번호를 기재하였습니다.\n너그러운 마음으로 양해 부탁드리며, 보내주시는\n따뜻한 축하의 마음에 깊이 감사드립니다.'
};

const app = document.querySelector('#app');
const state = {
  countdownTimer: null,
  toastTimer: null,
  openingTimers: [],
  galleryIndex: 0,
  galleryScrollFrame: null,
  guestbookMessages: []
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

const IMAGE_ASSET_VERSION = '20260820-2';

function imageVariant(src, variant) {
  if (!src || !/^\.\/assets\/[^/]+\.(jpe?g)$/i.test(src)) return src;
  return `${src.replace('./assets/', `./assets/${variant}/`)}?v=${IMAGE_ASSET_VERSION}`;
}

function buildVisual(item, slot, extraClass = '') {
  if (item.src) {
    const variant = slot === 'gallery' ? 'thumbs' : 'display';
    const loading = slot === 'cover' ? 'eager' : 'lazy';
    const priority = slot === 'cover' ? ' fetchpriority="high"' : '';
    return `<img src="${escapeHtml(imageVariant(item.src, variant))}" alt="${escapeHtml(item.title || item.name || item.label)}" loading="${loading}" decoding="async"${priority}>`;
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
        <article class="story-person">
          <div class="story-photo story-photo--primary">
            ${buildVisual({ ...item, src: item.images[0] }, 'story')}
            <div class="story-caption">
              <strong>${escapeHtml(item.name)}</strong>
            </div>
          </div>
          <div class="story-photo story-photo--secondary">
            ${buildVisual({ ...item, src: item.images[1] }, 'story')}
          </div>
        </article>
      `
    )
    .join('');
}

function buildFamilyIntroduction() {
  return `
    <div class="family-introduction">
      ${invitationConfig.familyLines
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
  `;
}

function buildFamilyArchive() {
  return invitationConfig.familyArchive
    .map(
      (item, index) => `
        <figure class="family-portrait family-portrait--${index % 2 === 0 ? 'groom' : 'bride'}">
          <div class="family-portrait-image">
            ${buildVisual(item, 'story')}
          </div>
          <figcaption class="family-portrait-caption">
            <span>${String(index + 1).padStart(2, '0')} · ${escapeHtml(item.label)}</span>
            <div>
              <strong>${escapeHtml(item.title)}</strong>
              <p>${escapeHtml(item.caption)}</p>
            </div>
          </figcaption>
        </figure>
      `
    )
    .join('');
}

function buildContacts() {
  return invitationConfig.contacts
    .map(
      (group) => `
        <section class="contact-group">
          <div class="contact-group-title">${escapeHtml(group.side)}</div>
          <div class="contact-list">
            ${group.people
              .map((person) => {
                const phoneLink = String(person.phone || '').replace(/[^0-9+]/g, '');
                const personLabel = `${person.role} ${person.name}`;
                return `
                  <article class="contact-row">
                    <div class="contact-person">
                      <div><small>${escapeHtml(person.role)}</small><strong>${escapeHtml(person.name)}</strong></div>
                    </div>
                    <div class="contact-actions">
                      <a class="contact-action contact-action--call" href="tel:${escapeHtml(phoneLink)}" aria-label="${escapeHtml(personLabel)}에게 전화 걸기">전화</a>
                      <a class="contact-action contact-action--sms" href="sms:${escapeHtml(phoneLink)}" aria-label="${escapeHtml(personLabel)}에게 문자 보내기">문자</a>
                    </div>
                  </article>
                `;
              })
              .join('')}
          </div>
        </section>
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
        <figure class="gallery-slide" data-gallery-slide aria-label="${escapeHtml(item.title)} ${index + 1}번째 사진">
          <div class="gallery-slide-frame">
            ${buildVisual(item, 'gallery')}
          </div>
          <figcaption class="gallery-slide-caption">
            <span>${String(index + 1).padStart(2, '0')}</span>
            <p>${escapeHtml(item.title)}</p>
          </figcaption>
        </figure>
      `
    )
    .join('');
}

function getGuestbookPreviewMessages() {
  if (location.protocol !== 'file:') return [];

  return [
    {
      id: 'preview-1',
      name: '민지',
      message: '두 분의 새로운 시작을 진심으로 축하해요. 오래오래 행복하세요!',
      createdAt: '2026-08-08T10:30:00+09:00'
    },
    {
      id: 'preview-2',
      name: '준호',
      message: '서로를 바라보는 모습처럼 늘 다정하고 웃음 가득한 날들만 있길 바라!',
      createdAt: '2026-08-07T19:20:00+09:00'
    },
    {
      id: 'preview-3',
      name: '현정 이모',
      message: '사랑스러운 두 사람의 결혼을 축복합니다. 예쁜 가정 이루렴.',
      createdAt: '2026-08-06T14:10:00+09:00'
    }
  ];
}

function formatGuestbookDate(value) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return '';

  return new Intl.DateTimeFormat('ko-KR', {
    month: '2-digit',
    day: '2-digit'
  }).format(date);
}

function buildGuestbookMessages(messages) {
  if (!messages.length) {
    return `
      <div class="guestbook-empty">
        <span>♡</span>
        <p>첫 번째 축하 메시지를 남겨주세요.</p>
      </div>
    `;
  }

  return messages
    .map((item) => `
      <article class="guestbook-card">
        <div class="guestbook-card-head">
          <div>
            <strong>${escapeHtml(item.name)}</strong>
            <time datetime="${escapeHtml(item.createdAt)}">${escapeHtml(formatGuestbookDate(item.createdAt))}</time>
          </div>
        </div>
        <p>${nl2br(item.message)}</p>
      </article>
    `)
    .join('');
}

function renderGuestbookMessages(messages) {
  state.guestbookMessages = messages.slice(0, invitationConfig.guestbook.limit);
  const container = document.getElementById('guestbookList');
  if (container) container.innerHTML = buildGuestbookMessages(state.guestbookMessages);

  const toggle = document.querySelector('[data-toggle-guestbook]');
  const count = document.querySelector('[data-guestbook-count]');
  if (count) count.textContent = String(state.guestbookMessages.length);
  if (toggle) {
    const hasMessages = state.guestbookMessages.length > 0;
    toggle.hidden = !hasMessages;
    toggle.disabled = !hasMessages;
    setGuestbookExpanded(false);
  }
}

function setGuestbookAvailability(isAvailable, label = '축하 메시지 남기기') {
  document.querySelectorAll('[data-open-guestbook]').forEach((button) => {
    button.disabled = !isAvailable;
    const labelNode = button.querySelector('[data-guestbook-write-label]');
    if (labelNode) labelNode.textContent = label;
  });
}

function setGuestbookExpanded(isExpanded) {
  const container = document.getElementById('guestbookList');
  const toggle = document.querySelector('[data-toggle-guestbook]');
  const label = document.querySelector('[data-guestbook-toggle-label]');
  if (!container || !toggle || !label) return;

  container.hidden = !isExpanded;
  toggle.setAttribute('aria-expanded', String(isExpanded));
  label.textContent = isExpanded ? '축하 메시지 닫기' : '축하 메시지 보기';
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
        <article class="transport-item${item.isBus ? ' transport-item--bus' : ''}">
          <small>${escapeHtml(item.label)}</small>
          ${item.isBus
            ? `<p class="account-copy">${escapeHtml(item.title)}</p>`
            : `<strong class="transport-title">${escapeHtml(item.title)}</strong>`}
          <p class="account-copy">${nl2br(item.copy)}</p>
        </article>
      `
    )
    .join('');
}

function buildVenueAddress() {
  return `
    <strong class="venue-title">${escapeHtml(invitationConfig.venue.title)}</strong><br>
    <span class="venue-hall">${escapeHtml(invitationConfig.venue.hall)}</span><br>
    <span class="venue-line">${escapeHtml(invitationConfig.venue.address)}</span>
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
  const groups = invitationConfig.accounts
    .map(
      (group) => `
        <section class="account-side">
          <h3 class="account-side-title">${escapeHtml(group.group)}</h3>
          ${group.items
            .map(
              (item) => `
                <article class="account-item">
                  <div class="account-details">
                    <div class="account-owner">
                      <span class="account-bank">${escapeHtml(item.bank)}</span>
                      <strong class="account-name">${escapeHtml(item.name)}</strong>
                    </div>
                    <div class="account-number-row">
                      <span class="account-number">${escapeHtml(item.number)}</span>
                      <button class="copy-button" type="button" data-copy="${escapeHtml(item.number)}">복사</button>
                    </div>
                  </div>
                </article>
              `
            )
            .join('')}
        </section>
      `
    )
    .join('');

  return `
    <section class="account-group">
      <button class="account-trigger" type="button" data-toggle-accounts aria-controls="accountPanel" aria-expanded="false">
        <div>
          <small>Account</small>
          <strong class="account-title">신랑 · 신부 측 계좌번호</strong>
        </div>
        <span class="account-chevron" aria-hidden="true">⌄</span>
      </button>
      <div class="account-panel" id="accountPanel" hidden>
        ${groups}
      </div>
    </section>
  `;
}

function setAccountsExpanded(isExpanded) {
  const trigger = document.querySelector('[data-toggle-accounts]');
  const panel = document.getElementById('accountPanel');
  if (!trigger || !panel) return;

  trigger.setAttribute('aria-expanded', String(isExpanded));
  panel.hidden = !isExpanded;
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
  app.innerHTML = `
    <div class="opening-sequence" data-opening aria-hidden="true">
      <div class="opening-sequence-frame">
        <span class="opening-sequence-eyebrow">PRIVATE INVITATION</span>
        <div class="opening-sequence-names">
          <span>Yunchan</span>
          <i>&amp;</i>
          <span>Jiyun</span>
        </div>
        <span class="opening-sequence-rule"></span>
        <p>20 · DECEMBER · 2026</p>
      </div>
    </div>
    <div class="page-shell">
      <main class="page">
        <section class="editorial-hero" id="top">
          <div class="hero-media" data-hero-media>
            ${buildVisual(invitationConfig.cover, 'cover')}
          </div>
          <div class="hero-shade" aria-hidden="true"></div>
          <div class="hero-masthead">
            <span>PRIVATE INVITATION</span>
            <span>PANGYO · 2026</span>
          </div>
          <div class="hero-copy">
            <p class="hero-kicker">TOGETHER WITH THEIR FAMILIES</p>
            <h1 class="hero-names">
              <span>Yunchan</span>
              <i>×</i>
              <span>Jiyun</span>
            </h1>
            <p class="hero-korean">${escapeHtml(invitationConfig.couple.groomFull)} · ${escapeHtml(invitationConfig.couple.brideFull)}</p>
            <div class="hero-date">
              <span>2026. 12. 20</span>
              <b></b>
              <span>SUNDAY · 12:30 PM</span>
            </div>
          </div>
          <button class="hero-scroll" type="button" data-scroll="#invitation" aria-label="초대의 글로 이동">
            <span>SCROLL TO DISCOVER</span><i aria-hidden="true"></i>
          </button>
        </section>

        <section class="editorial-section invitation-section reveal" id="invitation">
          <header class="folio-head">
            <span>01</span>
            <span>THE INVITATION</span>
          </header>
          <h2 class="invitation-statement">우리의 이야기가<br>이제 <em>새로운 장면</em>을<br>시작합니다.</h2>
          <div class="invitation-copy-grid">
            <p class="invitation-lead">서로의 눈을 맞추고 다정한 마음을 나누며,<br>평생을 함께하고 싶은 확신을 얻었습니다.</p>
            <p class="invitation-body">매일 더 많이 웃게 해 주는 사람과 이제 같은 방향을 바라보며 걸어가려 합니다. 귀한 걸음으로 저희의 새로운 시작을 함께해 주시면 더없이 기쁘겠습니다.</p>
          </div>
          ${buildFamilyIntroduction()}
          <button class="text-action" type="button" data-open-rsvp>
            <span data-rsvp-label>${rsvpLabel}</span><i aria-hidden="true">↗</i>
          </button>
        </section>

        <section class="editorial-section story-section reveal" id="story">
          <header class="folio-head">
            <span>02</span>
            <span>BEFORE WE MET</span>
          </header>
          <div class="story-heading-wrap">
            <h2 class="section-display">사랑으로 자라온<br>두 사람의 시간</h2>
            <p>서로 다른 장면을 지나<br>이제 같은 이야기를 씁니다.</p>
          </div>
          <div class="story-strip">${buildStory()}</div>
          <section class="family-archive" aria-label="윤찬이와 지윤이의 가족사진">
            <div class="family-archive-list">${buildFamilyArchive()}</div>
          </section>
          <div class="letter-stack">${buildLetters()}</div>
        </section>

        <section class="wedding-day reveal" id="wedding-day">
          <header class="folio-head folio-head--light">
            <span>03</span>
            <span>THE WEDDING DAY</span>
          </header>
          <div class="date-editorial">
            <span class="date-year">2026</span>
            <div class="date-main">
              <span>DECEMBER</span>
              <strong>20</strong>
              <span>SUNDAY</span>
            </div>
          </div>
          <div class="ceremony-lockup">
            <p class="ceremony-time">12:30 <small>PM</small></p>
            <div>
              <strong>GRAND BALLROOM</strong>
              <span>${escapeHtml(invitationConfig.event.venueEnglish)}</span>
              <span>${escapeHtml(invitationConfig.venue.hall)} · ${escapeHtml(invitationConfig.event.address)}</span>
            </div>
          </div>
          ${buildWeddingCalendar(invitationConfig.event.dateIso)}
          <div class="countdown-grid" id="countdownGrid">
            <article class="countdown-card"><strong data-countdown="days">0</strong><span>DAYS</span></article>
            <article class="countdown-card"><strong data-countdown="hours">0</strong><span>HOURS</span></article>
            <article class="countdown-card"><strong data-countdown="minutes">0</strong><span>MIN</span></article>
            <article class="countdown-card"><strong data-countdown="seconds">0</strong><span>SEC</span></article>
          </div>
          <p class="countdown-copy" id="countdownCopy">${escapeHtml(invitationConfig.couple.groomShort)} · ${escapeHtml(invitationConfig.couple.brideShort)} 결혼식까지 기다리고 있습니다.</p>
          <button class="button primary" type="button" data-open-rsvp><span data-rsvp-label>${rsvpLabel}</span></button>
        </section>

        <section class="photo-interlude reveal" aria-label="캘린더 다음에 이어지는 두 사람의 웨딩 사진">
          <div class="photo-interlude-media">${buildVisual(invitationConfig.gallery[16], 'story')}</div>
          <p class="photo-script">In every light, together.</p>
          <span class="photo-caption">YUNCHAN &amp; JIYUN · A PORTRAIT OF US</span>
        </section>

        <section class="gallery-section reveal" id="gallery">
          <header class="folio-head gallery-head">
            <span>04</span>
            <span>PORTRAIT ARCHIVE</span>
          </header>
          <div class="gallery-intro">
            <h2>Our story,<br>in photographs.</h2>
            <p>사진을 좌우로 밀어<br>한 장씩 보실 수 있습니다.</p>
          </div>
          <div class="gallery-flow" role="region" aria-label="웨딩 사진 슬라이드">
            <div class="gallery-track" id="galleryTrack" tabindex="0">
              ${buildGallery()}
            </div>
            <div class="gallery-controls">
              <p class="gallery-progress" aria-live="polite"><strong id="galleryCurrent">01</strong><span>/</span><span>${String(invitationConfig.gallery.length).padStart(2, '0')}</span></p>
              <p class="gallery-swipe-hint">SWIPE</p>
              <div class="gallery-arrows">
                <button type="button" data-gallery-step="-1" aria-label="이전 사진">←</button>
                <button type="button" data-gallery-step="1" aria-label="다음 사진">→</button>
              </div>
            </div>
          </div>
        </section>

        <section class="venue-section reveal" id="venue">
          <header class="folio-head folio-head--light">
            <span>05</span>
            <span>ARRIVAL &amp; LOCATION</span>
          </header>
          <div class="venue-intro">
            <p class="venue-city">PANGYO<br>GYEONGGI</p>
            <div>
              <h2>${escapeHtml(invitationConfig.venue.title)}</h2>
              <p>${escapeHtml(invitationConfig.venue.hall)}</p>
              <p>${escapeHtml(invitationConfig.venue.address)}</p>
            </div>
          </div>
          <div class="venue-block">
            <div class="map-visual">
              <div class="map-badge"><small>${escapeHtml(invitationConfig.venue.badge)}</small></div>
              <div class="map-canvas" id="venueMap">${buildMapFallback(invitationConfig.venue.map.fallbackMessage)}</div>
            </div>
            <div class="venue-links">${buildVenueLinks()}</div>
            <div class="transport-list">${buildTransport()}</div>
          </div>
        </section>

        <section class="guestbook-section reveal" id="guestbook">
          <header class="folio-head">
            <span>06</span>
            <span>NOTES FOR US</span>
          </header>
          <h2 class="section-display">두 사람에게<br>따뜻한 마음을 남겨주세요.</h2>
          <p class="section-copy">보내주신 한마디를 오래도록 간직하겠습니다.</p>
          <div class="guestbook-actions">
            <button class="guestbook-toggle-button" type="button" data-toggle-guestbook aria-controls="guestbookList" aria-expanded="false" hidden disabled>
              <span class="guestbook-toggle-copy"><span data-guestbook-toggle-label>축하 메시지 보기</span><span class="guestbook-count" data-guestbook-count>0</span></span>
              <span class="guestbook-chevron" aria-hidden="true">⌄</span>
            </button>
            <button class="button primary guestbook-open-button" type="button" data-open-guestbook disabled>
              <span data-guestbook-write-label>축하 메시지 남기기</span><span aria-hidden="true">↗</span>
            </button>
          </div>
          <div class="guestbook-list" id="guestbookList" hidden>${buildGuestbookMessages(getGuestbookPreviewMessages())}</div>
        </section>

        <section class="contact-section reveal" id="contact">
          <header class="folio-head"><span>07</span><span>CONTACT</span></header>
          <h2 class="section-display">연락하실 곳</h2>
          <div class="contact-groups">${buildContacts()}</div>
        </section>

        <section class="accounts-section reveal" id="accounts">
          <header class="folio-head"><span>08</span><span>WITH GRATITUDE</span></header>
          <h2 class="section-display">마음 전하실 곳</h2>
          <p class="accounts-notice">${nl2br(invitationConfig.accountsNotice)}</p>
          <div class="account-wrap">${buildAccounts()}</div>
          ${buildAccountActions()}
        </section>

        <footer class="footer reveal">
          <p class="footer-script">Yunchan &amp; Jiyun</p>
          <p class="footer-copy">DECEMBER 20, 2026 · PANGYO</p>
          <button class="footer-top" type="button" data-scroll="#top">BACK TO TOP ↑</button>
        </footer>
      </main>

      <div class="sticky-bar">
        <div class="sticky-grid">
          <button class="sticky-button" type="button" data-open-rsvp><span>01</span><strong>RSVP</strong></button>
          <button class="sticky-button" type="button" data-scroll="#venue"><span>02</span><strong>LOCATION</strong></button>
          <button class="sticky-button" type="button" data-scroll="#accounts"><span>03</span><strong>GIFT</strong></button>
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
          <p class="rsvp-copy">${nl2br(invitationConfig.rsvp.helper)}</p>
          <form id="rsvpForm" class="rsvp-form">
            <section class="rsvp-block">
              <label class="field-label">어느 쪽 하객이신가요?</label>
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
              <label class="field-label" for="guestPhoneLast4">확인을 위해 휴대전화 번호 뒤 4자리를 입력해 주세요</label>
              <input
                class="field-input"
                id="guestPhoneLast4"
                name="phoneLast4"
                type="text"
                inputmode="numeric"
                maxlength="4"
                pattern="[0-9]{4}"
                placeholder="휴대전화 번호 뒤 4자리"
                required
              >
            </section>

            <button class="button primary rsvp-submit" type="submit" id="rsvpSubmitButton">참석 여부 보내기</button>
          </form>
        </div>
      </section>

      <section class="modal" id="guestbookModal" aria-hidden="true">
        <div class="modal-sheet guestbook-modal-sheet">
          <div class="modal-head">
            <div>
              <span class="mini-label">GUESTBOOK</span>
              <h2 class="modal-title">축하 메시지 남기기</h2>
            </div>
            <button class="close-button" type="button" data-close-modal="guestbookModal" aria-label="닫기">×</button>
          </div>
          <p class="guestbook-modal-copy">소중한 마음을 신랑 신부에게 전해주세요.</p>
          <form id="guestbookForm" class="guestbook-form">
            <label class="guestbook-field">
              <span class="field-label">이름</span>
              <input class="field-input" name="name" type="text" maxlength="20" placeholder="이름을 입력해 주세요" required>
            </label>
            <label class="guestbook-field">
              <span class="field-label">축하 메시지</span>
              <textarea class="field-textarea" name="message" rows="5" maxlength="200" placeholder="따뜻한 축하의 마음을 남겨주세요" required></textarea>
              <small class="guestbook-character-count"><span id="guestbookCharacterCount">0</span> / 200</small>
            </label>
            <label class="guestbook-honeypot" aria-hidden="true">
              웹사이트
              <input name="website" type="text" tabindex="-1" autocomplete="off">
            </label>
            <button class="button primary guestbook-submit" type="submit" id="guestbookSubmitButton">메시지 남기기</button>
          </form>
        </div>
      </section>

      <div class="toast" id="toast"></div>
    </div>
  `;
}

function setupReveal() {
  const nodes = document.querySelectorAll('.reveal');
  const itemSelectors = [
    '.reveal > .mini-label',
    '.reveal > .folio-head',
    '.reveal > .section-title',
    '.reveal > .section-display',
    '.reveal > .section-copy',
    '.invitation-statement',
    '.invitation-copy-grid',
    '.story-heading-wrap',
    '.date-editorial',
    '.ceremony-lockup',
    '.gallery-intro',
    '.venue-intro',
    '.countdown-card',
    '.family-introduction',
    '.contact-group',
    '.letter-item',
    '.guestbook-card',
    '.guestbook-open-button',
    '.map-visual',
    '.venue-links > *',
    '.transport-item',
    '.account-group',
    '.account-actions > *'
  ];
  const items = document.querySelectorAll(itemSelectors.join(','));
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const lightweightMotion = window.matchMedia('(max-width: 767px), (pointer: coarse)').matches;

  items.forEach((item) => {
    item.classList.add('reveal-item');
    if (lightweightMotion) {
      item.classList.add('is-visible');
      return;
    }
    const siblings = Array.from(item.parentElement?.children || []);
    const siblingIndex = Math.max(0, siblings.indexOf(item));
    item.style.setProperty('--reveal-delay', `${(siblingIndex % 5) * 75}ms`);
  });

  if (reducedMotion || !('IntersectionObserver' in window)) {
    nodes.forEach((node) => node.classList.add('is-visible'));
    items.forEach((item) => item.classList.add('is-visible'));
    return;
  }

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

  if (lightweightMotion) return;

  const itemObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        itemObserver.unobserve(entry.target);
      });
    },
    { threshold: 0.08, rootMargin: '0px 0px -4% 0px' }
  );

  items.forEach((item) => itemObserver.observe(item));
}

function setupOpeningSequence() {
  const opening = document.querySelector('[data-opening]');
  if (!opening) return;

  state.openingTimers.forEach((timer) => window.clearTimeout(timer));
  state.openingTimers = [];

  if (window.matchMedia('(prefers-reduced-motion: reduce), (max-width: 767px), (pointer: coarse)').matches) {
    opening.remove();
    return;
  }

  const root = document.documentElement;
  const finish = () => {
    opening.remove();
    root.classList.remove('intro-active', 'intro-revealing');
    state.openingTimers = [];
  };

  root.classList.add('intro-active');
  window.requestAnimationFrame(() => opening.classList.add('is-playing'));

  state.openingTimers.push(
    window.setTimeout(() => {
      root.classList.add('intro-revealing');
      opening.classList.add('is-leaving');
    }, 1450),
    window.setTimeout(finish, 2300)
  );
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
    if (window.Kakao?.Share) {
      if (!window.Kakao.isInitialized()) {
        window.Kakao.init(invitationConfig.venue.map.javascriptKey);
      }

      await window.Kakao.Share.sendDefault({
        objectType: 'feed',
        content: {
          title: invitationConfig.site.shareTitle,
          description: invitationConfig.site.shareText,
          imageUrl: invitationConfig.site.shareImageUrl,
          imageWidth: 1200,
          imageHeight: 630,
          link: {
            mobileWebUrl: url,
            webUrl: url
          }
        },
        buttons: [
          {
            title: '청첩장 보러 가기',
            link: {
              mobileWebUrl: url,
              webUrl: url
            }
          }
        ]
      });
      return;
    }

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

    console.warn('[KAKAO SHARE] feed share failed; falling back to link share', error);

    if (navigator.share) {
      try {
        await navigator.share({
          title: invitationConfig.site.shareTitle,
          text: invitationConfig.site.shareText,
          url
        });
        return;
      } catch (fallbackError) {
        if (fallbackError?.name === 'AbortError') return;
      }
    }

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
    const labelNode = button.querySelector('[data-rsvp-label]');
    if (labelNode) {
      labelNode.textContent = label;
    } else {
      button.textContent = label;
    }
  });
}

async function loadGuestbookMessages() {
  const url = `${invitationConfig.guestbook.endpoint}?action=guestbook&limit=${invitationConfig.guestbook.limit}`;
  const response = await fetch(url, { cache: 'no-store' });
  if (!response.ok) throw new Error(`Guestbook request failed: HTTP ${response.status}`);

  const payload = await response.json();
  return Array.isArray(payload?.messages) ? payload.messages : [];
}

async function submitGuestbookMessage(payload) {
  if (location.protocol === 'file:') return 'preview';

  await fetch(invitationConfig.guestbook.endpoint, {
    method: 'POST',
    mode: 'no-cors',
    cache: 'no-store',
    body: new URLSearchParams(payload)
  });

  return 'remote';
}

function setupGuestbook() {
  const form = document.getElementById('guestbookForm');
  const submitButton = document.getElementById('guestbookSubmitButton');
  const messageField = form?.querySelector('textarea[name="message"]');
  const characterCount = document.getElementById('guestbookCharacterCount');
  if (!form || !submitButton || !messageField) return;

  const previewMessages = getGuestbookPreviewMessages();
  if (previewMessages.length) {
    renderGuestbookMessages(previewMessages);
    setGuestbookAvailability(true);
  } else {
    setGuestbookAvailability(false, '축하 메시지 불러오는 중...');
    loadGuestbookMessages()
      .then((messages) => {
        renderGuestbookMessages(messages);
        setGuestbookAvailability(true);
      })
      .catch((error) => {
        console.warn('[GUESTBOOK] load failed', error);
        renderGuestbookMessages([]);
        setGuestbookAvailability(false, '축하 메시지 준비 중');
      });
  }

  messageField.addEventListener('input', () => {
    if (characterCount) characterCount.textContent = String(messageField.value.length);
  });

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const raw = Object.fromEntries(new FormData(form).entries());
    const name = String(raw.name || '').trim();
    const message = String(raw.message || '').trim();
    if (!name || message.length < 2) return;

    const payload = {
      formType: 'guestbook',
      messageId: createSubmissionId(),
      name,
      message,
      website: String(raw.website || '')
    };

    submitButton.disabled = true;
    submitButton.textContent = '마음을 전하는 중...';

    try {
      const result = await submitGuestbookMessage(payload);
      renderGuestbookMessages([
        {
          id: payload.messageId,
          name,
          message,
          createdAt: new Date().toISOString()
        },
        ...state.guestbookMessages
      ]);
      setGuestbookExpanded(true);
      form.reset();
      if (characterCount) characterCount.textContent = '0';
      closeModal('guestbookModal');
      showToast(result === 'preview' ? '미리보기에 메시지를 추가했어요.' : '축하 메시지를 남겼어요.');
    } catch (error) {
      console.error('[GUESTBOOK] submit failed', error);
      showToast('메시지를 남기지 못했습니다. 잠시 후 다시 시도해 주세요.');
    } finally {
      submitButton.disabled = false;
      submitButton.textContent = '메시지 남기기';
    }
  });
}

function bindActions() {
  document.querySelectorAll('[data-open-rsvp]').forEach((button) => {
    button.addEventListener('click', () => openModal('rsvpModal'));
  });

  document.querySelectorAll('[data-open-guestbook]').forEach((button) => {
    button.addEventListener('click', () => openModal('guestbookModal'));
  });

  document.querySelectorAll('[data-toggle-guestbook]').forEach((button) => {
    button.addEventListener('click', () => {
      setGuestbookExpanded(button.getAttribute('aria-expanded') !== 'true');
    });
  });

  document.querySelectorAll('[data-toggle-accounts]').forEach((button) => {
    button.addEventListener('click', () => {
      setAccountsExpanded(button.getAttribute('aria-expanded') !== 'true');
    });
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

  window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      document.querySelectorAll('.modal.is-open').forEach((modal) => closeModal(modal.id));
    }
  });
}

function setupGallery() {
  const track = document.getElementById('galleryTrack');
  const slides = Array.from(document.querySelectorAll('[data-gallery-slide]'));
  const current = document.getElementById('galleryCurrent');
  const buttons = Array.from(document.querySelectorAll('[data-gallery-step]'));
  if (!track || !slides.length || !current) return;

  const updateGalleryState = () => {
    const trackCenter = track.scrollLeft + track.clientWidth / 2;
    let closestIndex = 0;
    let closestDistance = Number.POSITIVE_INFINITY;

    slides.forEach((slide, index) => {
      const slideCenter = slide.offsetLeft + slide.clientWidth / 2;
      const distance = Math.abs(trackCenter - slideCenter);
      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    state.galleryIndex = closestIndex;
    current.textContent = String(closestIndex + 1).padStart(2, '0');
    buttons.forEach((button) => {
      const step = Number(button.dataset.galleryStep || 0);
      button.disabled = (step < 0 && closestIndex === 0) || (step > 0 && closestIndex === slides.length - 1);
    });
    state.galleryScrollFrame = null;
  };

  const goToSlide = (index) => {
    const targetIndex = Math.max(0, Math.min(slides.length - 1, index));
    track.scrollTo({
      left: slides[targetIndex].offsetLeft - slides[0].offsetLeft,
      behavior: 'smooth'
    });
  };

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      goToSlide(state.galleryIndex + Number(button.dataset.galleryStep || 0));
    });
  });

  track.addEventListener('scroll', () => {
    if (state.galleryScrollFrame) return;
    state.galleryScrollFrame = window.requestAnimationFrame(updateGalleryState);
  }, { passive: true });

  track.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      goToSlide(state.galleryIndex - 1);
    }
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      goToSlide(state.galleryIndex + 1);
    }
  });

  updateGalleryState();
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
      submitButton.textContent = '참석 여부 보내기';
    }
  });
}

function mount() {
  renderApp();
  setupOpeningSequence();
  setupReveal();
  bindActions();
  setupGallery();
  setupVenueMap();
  setupCountdown();
  setupRsvp();
  setupGuestbook();
  syncRsvpLabel();

  if ('serviceWorker' in navigator && location.protocol !== 'file:') {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./sw.js').catch((error) => {
        console.warn('[CACHE] service worker registration failed', error);
      });
    });
  }
}

mount();
