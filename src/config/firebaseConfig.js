// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBb-DUemJij9XsE051eJk5Q30YVklYwRYQ",
  authDomain: "quiz-901b0.firebaseapp.com",
  projectId: "quiz-901b0",
  storageBucket: "quiz-901b0.appspot.com",
  messagingSenderId: "393181829878",
  appId: "1:393181829878:web:7c60762cd3853f6ea42ad7",
  measurementId: "G-XWZSL4XW60"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app)