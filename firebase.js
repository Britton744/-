// Firebase compat SDK: works with ordinary HTML files (no npm/build step).
const firebaseConfig = {
  apiKey: "AIzaSyBPdzepXoNsfZuwvheHrhA6LynGJBctk_E",
  authDomain: "britton-life-store.firebaseapp.com",
  projectId: "britton-life-store",
  storageBucket: "britton-life-store.firebasestorage.app",
  messagingSenderId: "258780754601",
  appId: "1:258780754601:web:5c0d162547e64bd99d2fb8",
  measurementId: "G-RXK7K2Z4YT"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
window.BL = { db, auth, storage };
