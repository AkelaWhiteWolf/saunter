import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBV_G6XPFPa8HaevyGCH2gofIWeNRdIkaM',
  authDomain: 'saunter-cf930.firebaseapp.com',
  projectId: 'saunter-cf930',
  storageBucket: 'saunter-cf930.appspot.com',
  messagingSenderId: '1013643572045',
  appId: '1:1013643572045:web:a09a863fc955fce161bd04',
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
