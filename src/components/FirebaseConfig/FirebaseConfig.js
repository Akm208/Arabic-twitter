// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from '@firebase/firestore'
import { getStorage } from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTFMu0Ivl76riKqbn7pAjdXS9S8WF587k",
  authDomain: "lazy-73f87.firebaseapp.com",
  projectId: "lazy-73f87",
  storageBucket: "lazy-73f87.appspot.com",
  messagingSenderId: "162722036554",
  appId: "1:162722036554:web:b08e3ad243b384e81ddfb3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)
 export const db = getFirestore(app);

export const auth =getAuth(app)