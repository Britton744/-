// ضع إعدادات تطبيق Firebase Web الحالية هنا كما هي من Firebase Console.
const firebaseConfig = {
  apiKey: "PASTE_YOUR_API_KEY",
  authDomain: "britton-life-store.firebaseapp.com",
  projectId: "britton-life-store",
  storageBucket: "britton-life-store.firebasestorage.app",
  messagingSenderId: "PASTE_YOUR_MESSAGING_SENDER_ID",
  appId: "PASTE_YOUR_APP_ID"
};

// بريد المدير المسجل في Firebase Authentication.
// اسم المستخدم الذي يظهر في شاشة الدخول هو Rami.
const ADMIN_EMAIL = "roooo77775@gmail.com";

// اتركها فارغة إلى أن تجهز Cloud Function آمنة لإرسال الفواتير بالبريد.
const EMAIL_FUNCTION_URL = "";
// اتركه فارغاً إلى أن تجهز خادم المساعد الذكي رُؤى.
const AI_ENDPOINT = "";

firebase.initializeApp(firebaseConfig);
window.BL = {
  db: firebase.firestore(),
  auth: firebase.auth(),
  storage: firebase.storage(),
  ADMIN_EMAIL,
  EMAIL_FUNCTION_URL,
  AI_ENDPOINT
};
