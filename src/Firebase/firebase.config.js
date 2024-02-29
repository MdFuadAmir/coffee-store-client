// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBF16SrMoJipCl8T4QPAkZAZxtiIOepYD0",
  authDomain: "coffee-store-f856d.firebaseapp.com",
  projectId: "coffee-store-f856d",
  storageBucket: "coffee-store-f856d.appspot.com",
  messagingSenderId: "640796754115",
  appId: "1:640796754115:web:e485fb4f73714638362276"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;