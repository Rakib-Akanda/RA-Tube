// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYuSk8Ejegb1ADqj7TaHpUp-cmPMaNMrk",
  authDomain: "ra-tube.firebaseapp.com",
  projectId: "ra-tube",
  storageBucket: "ra-tube.appspot.com",
  messagingSenderId: "1053926211946",
  appId: "1:1053926211946:web:0b2d23b5a1b05226a2e513"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;