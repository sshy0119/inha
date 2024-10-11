// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBWDxP_CbW5eD2U2b3IVpR9lTWPTiO04J8",
  authDomain: "inha-cc102.firebaseapp.com",
  projectId: "inha-cc102",
  storageBucket: "inha-cc102.appspot.com",
  messagingSenderId: "1008640761184",
  appId: "1:1008640761184:web:b3aa8a44b6d7d35d819205",
  measurementId: "G-B16T33QESQ"
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//script 제외해서 파이어베이스 cdn으로 긁었고 const app에 export 추가함.