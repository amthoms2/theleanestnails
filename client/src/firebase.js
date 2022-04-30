import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE,
  authDomain: "the-leanest-nails-345616.firebaseapp.com",
  projectId: "the-leanest-nails-345616",
  storageBucket: "the-leanest-nails-345616.appspot.com",
  messagingSenderId: "1010891441609",
  appId: "1:1010891441609:web:3a92eb3b31b5c3ce2dd418"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export const storage = getStorage(firebaseApp);
