// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "rentnest-ef7f9.firebaseapp.com",
  projectId: "rentnest-ef7f9",
  storageBucket: "rentnest-ef7f9.appspot.com",
  messagingSenderId: "218076770820",
  appId: "1:218076770820:web:bcd3aa75e78f6638f0fb51"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
