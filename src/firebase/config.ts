// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6vOCcYPN7-L5qW3B1N5rnliSG-Ck7-Gs",
  authDomain: "astro-course-module-11.firebaseapp.com",
  projectId: "astro-course-module-11",
  storageBucket: "astro-course-module-11.appspot.com",
  messagingSenderId: "639019707730",
  appId: "1:639019707730:web:c5de69f4596f3c4812de8b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const projectAuth = getAuth(app);
