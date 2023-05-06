// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAkhztk_Tz8gKtC5ePrw2wCtUtKggO1SjE",
  authDomain: "evangadiforumz.firebaseapp.com",
  projectId: "evangadiforumz",
  storageBucket: "evangadiforumz.appspot.com",
  messagingSenderId: "43185254946",
  appId: "1:43185254946:web:ac9ad25212aabc2130507b",
  measurementId: "G-4LFVHRZYEH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
// const analytics = getAnalytics(app);