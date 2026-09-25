// Firebase 콘솔 → 프로젝트 설정 → 내 앱(웹) → "SDK 설정 및 구성"의 firebaseConfig 값을 붙여넣으세요.
// 이 값은 공개되어도 됩니다. 데이터 보호는 Firestore 보안 규칙(firestore.rules)이 담당합니다.
window.ESHG_FIREBASE = {
  config: {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT.firebaseapp.com",
    projectId: "YOUR_PROJECT",
    appId: "YOUR_APP_ID"
  },
  // 팀원이 함께 쓰는 공용 계정 (Authentication → 사용자 추가에서 만든 이메일과 똑같이)
  teamEmail: "team@eshg-board.app",
  // 업로드·삭제를 할 수 있는 관리자 계정 (firestore.rules의 목록과 똑같이)
  adminEmails: ["admin@eshg-board.app"]
};
