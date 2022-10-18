// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA457e92IvlCC7ZFpmbvS6_N1QUmDs4GRc",
  authDomain: "ema-john-simple-auth-fir-43640.firebaseapp.com",
  projectId: "ema-john-simple-auth-fir-43640",
  storageBucket: "ema-john-simple-auth-fir-43640.appspot.com",
  messagingSenderId: "937117729650",
  appId: "1:937117729650:web:9c9262e3096c2264fa53eb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;