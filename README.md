# wedding-invitation-mobile

신윤찬 · 김지윤 모바일 청첩장 정적 사이트입니다.  
GitHub Pages로 바로 배포할 수 있고, RSVP 응답은 Google Apps Script 웹앱을 통해 구글 스프레드시트에 쌓이도록 구성했습니다.

## 파일 구성

- `index.html`: 기본 메타 정보와 앱 진입점
- `app.js`: 청첩장 문구, 이미지 경로, RSVP 연동, 링크 공유 설정
- `styles.css`: 모바일 청첩장 스타일
- `google-apps-script/Code.gs`: 스프레드시트 저장용 Apps Script 웹앱 코드

## 먼저 바꿔둘 값

`app.js`의 `invitationConfig`에서 아래 항목들을 실제 값으로 교체하면 됩니다.

- `site.liveUrl`
  - GitHub Pages 실제 주소
  - 기본값은 `https://ggy0151.github.io/wedding-invitation-mobile/`
- `cover.src`
  - 메인 커버 사진 경로
- `story[].src`
  - 어린 시절 또는 단독 사진 경로
- `gallery[].src`
  - 갤러리 사진 경로
- `venue.hall`, `venue.address`, `venue.transport`
  - 예식장 상세 정보
- `accounts`
  - 신랑측/신부측 계좌 정보
- `rsvp.endpoint`
  - Apps Script 웹앱 배포 후 받은 `/exec` 주소
`rsvp.endpoint`가 비어 있으면 RSVP는 구글 시트로 가지 않고, 브라우저 `localStorage`에만 임시 저장됩니다.

## GitHub Pages 배포

GitHub Pages 설정은 저장소 기준으로 아래처럼 맞추면 됩니다.

1. GitHub 저장소 `Settings > Pages`로 이동합니다.
2. `Source`를 `Deploy from a branch`로 선택합니다.
3. 브랜치는 `main`, 폴더는 `/(root)`를 선택합니다.
4. `Save`를 누릅니다.
5. 몇 분 뒤 같은 화면 상단에 실제 배포 주소가 표시됩니다.

이 저장소명과 계정명이 그대로라면 기본 주소는 보통 아래 형태입니다.

`https://ggy0151.github.io/wedding-invitation-mobile/`

배포 주소가 확정되면 `app.js`의 `site.liveUrl`, `index.html`의 `og:url`, `canonical`도 같은 주소로 맞춰두면 됩니다.

## Google Apps Script 연결

### 1. 스프레드시트 준비

1. 구글 스프레드시트를 새로 만듭니다.
2. 메뉴에서 `확장 프로그램 > Apps Script`로 이동합니다.
3. 기본 코드를 모두 지우고 [`google-apps-script/Code.gs`](C:\Users\ggy01\wedding-invitation-mobile\google-apps-script\Code.gs) 내용을 붙여 넣습니다.
4. 저장합니다.

이 스크립트는 `RSVP` 시트를 자동으로 만들고, 아래 컬럼으로 응답을 쌓습니다.

- `submittedAt`
- `attendance`
- `side`
- `name`
- `count`
- `meal`
- `message`
- `createdAt`
- `invitationUrl`
- `pageUrl`
- `userAgent`

### 2. 웹앱 배포

1. Apps Script 우측 상단 `배포 > 새 배포`를 누릅니다.
2. 유형을 `웹 앱`으로 선택합니다.
3. 실행 주체는 본인 계정으로 둡니다.
4. 접근 권한은 `Anyone` 또는 `Anyone with the link`로 설정합니다.
5. 배포 후 발급되는 `/exec` 주소를 복사합니다.

### 3. 청첩장에 연결

`app.js`에서 아래 값을 실제 `/exec` 주소로 교체합니다.

```js
rsvp: {
  endpoint: 'https://script.google.com/macros/s/여기에-배포-아이디/exec',
  mode: 'no-cors',
  ...
}
```

현재 프런트는 Apps Script 웹앱과 잘 맞도록 `application/x-www-form-urlencoded` 기반으로 전송하고, `mode: 'no-cors'`를 사용합니다.  
그래서 브라우저가 CORS preflight 때문에 막히지 않고 바로 응답을 보낼 수 있습니다.

## QR 준비

실물 청첩장에 넣을 QR 이미지는 웹 화면 안에 표시하지 않고, 별도 파일로 준비하는 흐름으로 정리했습니다.

기본 QR 파일 경로:

- `assets/qr-invitation.png`

이 QR은 아래 주소를 가리키도록 생성했습니다.

- `https://ggy0151.github.io/wedding-invitation-mobile/`

추천 순서는 아래와 같습니다.

1. GitHub Pages 실제 주소가 바뀌지 않는지 먼저 확인합니다.
2. QR을 실물 청첩장 시안에 넣습니다.
3. 배포 주소가 달라지면 QR 이미지를 다시 생성합니다.

## 이미지 경로 예시

정적 사이트라서 상대 경로만 맞으면 바로 표시됩니다.

```js
cover: {
  src: './assets/cover.jpg',
  label: 'Wedding Portrait'
}
```

```js
gallery: [
  { title: 'Main Portrait', caption: '대표 사진', imageLabel: 'Photo 01', src: './assets/gallery-01.jpg' }
]
```

## 빠른 점검 체크리스트

- `site.liveUrl`이 실제 Pages 주소로 바뀌었는지
- `rsvp.endpoint`에 `/exec` 주소를 넣었는지
- 예식장 상세 주소와 홀 정보가 채워졌는지
- 계좌 정보가 실제 값으로 교체됐는지
- 커버, 스토리, 갤러리 이미지가 연결됐는지
- 실물 청첩장용 QR 파일이 최신 주소를 가리키는지

## 로컬 확인

이 프로젝트는 별도 빌드 없이 정적 파일만으로 동작합니다.  
브라우저에서 `index.html`을 열어도 화면 확인은 가능하지만, 실제 공유 주소와 RSVP 동작은 GitHub Pages 배포본에서 최종 점검하는 편이 가장 안전합니다.
