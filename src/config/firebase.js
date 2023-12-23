// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAEKgsltCnMKkqftrG_9p402DZ3Hk1w6EU",
  authDomain: "nextauth-395217.firebaseapp.com",
  projectId: "nextauth-395217",
  storageBucket: "nextauth-395217.appspot.com",
  messagingSenderId: "692516291601",
  appId: "1:692516291601:web:300f573714a6d03876ddb0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
