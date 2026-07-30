# wedding-invitation-mobile

윤찬 ♥ 지윤 모바일 청첩장 정적 사이트입니다.  
GitHub Pages로 바로 배포할 수 있고, RSVP 응답은 Google Apps Script 웹앱을 통해 구글 스프레드시트에 쌓이도록 구성했습니다.

## 파일 구성

- `index.html`: 메타 정보와 진입 파일
- `app.js`: 청첩장 문구, 이미지 경로, RSVP 연동, 달력과 카운트다운, 지도 설정
- `styles.css`: 모바일 청첩장 스타일
- `google-apps-script/Code.gs`: RSVP 수집용 Apps Script 웹앱 코드
- `assets/qr-invitation.png`: 청첩장 접속용 QR 이미지

## 먼저 바꿔야 할 값

`app.js`의 `invitationConfig`에서 아래 항목들을 실제 값으로 채우면 됩니다.

- `site.liveUrl`
  - GitHub Pages 실제 주소
  - 현재 기본값: `https://ggy0151.github.io/wedding-invitation-mobile/`
- `cover.src`
  - 메인 커버 사진 경로
- `story[].src`
  - 어린 시절 또는 추억 사진 경로
- `gallery[].src`
  - 갤러리 사진 경로
- `accounts`
  - 신랑측, 신부측 계좌 정보
- `rsvp.endpoint`
  - Apps Script 배포 후 받은 `/exec` 주소
  - 비어 있으면 RSVP는 실제 전송되지 않고, 제출한 기기 브라우저에만 임시 저장됩니다.

## 현재 예식 정보

현재 코드 기준 예식일은 `2026년 12월 20일 일요일 오후 12시 30분`입니다.  
상단 D-day 카운트다운은 이 날짜를 기준으로 앞으로 남은 시간을 계산합니다.

## GitHub Pages 배포

1. 저장소 `Settings > Pages`로 이동합니다.
2. `Source`를 `Deploy from a branch`로 선택합니다.
3. 브랜치는 `main`, 폴더는 `/(root)`를 선택합니다.
4. `Save`를 누릅니다.
5. 몇 분 뒤 상단에 실제 배포 주소가 표시됩니다.

기본 주소는 보통 아래 형식입니다.

`https://ggy0151.github.io/wedding-invitation-mobile/`

## RSVP 응답 연결

### 1. 구글 스프레드시트 준비

1. 구글 스프레드시트를 새로 만듭니다.
2. `확장 프로그램 > Apps Script`로 들어갑니다.
3. 기본 코드를 모두 지우고 [`google-apps-script/Code.gs`](C:\Users\ggy01\wedding-invitation-mobile\google-apps-script\Code.gs) 내용을 붙여 넣습니다.
4. 저장합니다.

현재 RSVP 응답 컬럼은 아래처럼 저장됩니다.

- `submittedAt`
- `attendance`
- `side`
- `name`
- `count`
- `phoneLast4`
- `createdAt`
- `invitationUrl`
- `pageUrl`
- `userAgent`

### 2. 웹앱으로 배포

1. Apps Script 우측 상단에서 `배포 > 새 배포`를 누릅니다.
2. 유형은 `웹 앱`으로 선택합니다.
3. 실행 주체는 본인 계정으로 둡니다.
4. 접근 권한은 `Anyone` 또는 `Anyone with the link`로 설정합니다.
5. 발급된 `/exec` 주소를 복사합니다.

### 3. 청첩장 코드에 연결

`app.js`의 `invitationConfig.rsvp.endpoint`에 `/exec` 주소를 넣으면 됩니다.

```js
rsvp: {
  endpoint: 'https://script.google.com/macros/s/배포된-웹앱-id/exec',
  mode: 'no-cors',
  ...
}
```

### 4. 지금 상태에서 꼭 알아둘 점

- 현재 `app.js`의 `rsvp.endpoint`가 비어 있으면 응답은 구글로 전송되지 않습니다.
- 이 경우 RSVP 제출 내용은 해당 기기의 브라우저 `localStorage`에만 임시 저장됩니다.
- 임시 저장 키는 `wedding_invitation_rsvp_drafts_v2`입니다.
- 응답 완료 표시 키는 `wedding_invitation_rsvp_done_v2`입니다.

### 5. 테스트 응답 1건 보내기 체크리스트

1. `app.js`의 `invitationConfig.rsvp.endpoint`에 실제 `/exec` 주소를 넣습니다.
2. GitHub Pages 배포본을 새로고침하거나 시크릿 창에서 엽니다.
3. 참석 여부 모달에서 테스트 응답 1건을 제출합니다.
4. 구글 스프레드시트의 `RSVP` 시트에 새 행이 추가됐는지 확인합니다.
5. 아래 컬럼이 정상적으로 들어왔는지 확인합니다.

- `submittedAt`
- `attendance`
- `side`
- `name`
- `count`
- `phoneLast4`
- `createdAt`
- `invitationUrl`
- `pageUrl`
- `userAgent`

### 6. 실제 결과를 어디서 확인하나

- 가장 중요한 확인 위치는 구글 스프레드시트의 `RSVP` 시트입니다.
- Apps Script 웹앱 `/exec` 주소를 브라우저에 직접 열었을 때 `Wedding RSVP endpoint is running.` 메시지가 보이면 엔드포인트 자체는 살아 있는 상태입니다.
- 청첩장 화면에서 `응답이 정상 접수되었습니다.` 토스트가 떠도, `mode: 'no-cors'` 특성상 최종 확인은 반드시 스프레드시트에서 해야 합니다.

### 7. 연결 전 임시 저장 확인 방법

브라우저 개발자도구 콘솔에서 아래를 실행하면 현재 기기에 임시 저장된 RSVP 목록을 볼 수 있습니다.

```js
localStorage.getItem('wedding_invitation_rsvp_drafts_v2')
```

## QR 코드

실물 청첩장에 넣을 QR 이미지는 별도 파일로 준비되어 있습니다.

- `assets/qr-invitation.png`

이 QR은 현재 아래 주소를 가리키도록 준비되어 있습니다.

- `https://ggy0151.github.io/wedding-invitation-mobile/`

배포 주소가 바뀌면 QR도 다시 생성해야 합니다.

## 로컬 확인

이 프로젝트는 별도 빌드 없이 정적 파일만으로 동작합니다.  
브라우저에서 `index.html`을 열어 화면 구성을 확인할 수 있고, 최종 RSVP 동작은 GitHub Pages 배포본에서 다시 한 번 확인하는 것이 가장 안전합니다.
