import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js';
import { getStorage } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js';

export const firebaseConfig = {
  apiKey: 'AIzaSyBPdzepXoNsfZuwvheHrhA6LynGJBctk_E',
  authDomain: 'britton-life-store.firebaseapp.com',
  projectId: 'britton-life-store',
  storageBucket: 'britton-life-store.firebasestorage.app',
  messagingSenderId: '258780754601',
  appId: '1:258780754601:web:5c0d162547e64bd99d2fb8',
  measurementId: 'G-RXK7K2Z4YT'
};
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const ADMIN_EMAIL = 'roooo77775@gmail.com';
export const STORE_WHATSAPP = '966556575822';
