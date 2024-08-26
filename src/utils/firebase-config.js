import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBaHFMynicAdachWfLyb7IAscnIM7PQmH4",
  authDomain: "react-netflix-clone-fcb82.firebaseapp.com",
  projectId: "react-netflix-clone-fcb82",
  storageBucket: "react-netflix-clone-fcb82.appspot.com",
  messagingSenderId: "441180316943",
  appId: "1:441180316943:web:c816afffa3bb9791a5ca7a",
  measurementId: "G-YGHM2XTEKZ"
};

const app = initializeApp(firebaseConfig);


export const firebaseAuth = getAuth(app);