// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCnt9BCLVReBb_U0EsscYE7PlZNbUOR1lc",
  authDomain: "tracker-64e09.firebaseapp.com",
  projectId: "tracker-64e09",
  storageBucket: "tracker-64e09.appspot.com",
  messagingSenderId: "962927533568",
  appId: "1:962927533568:web:c2637d459453dcd17482e5",
  measurementId: "G-7XFFPHMHC8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const firestore = getFirestore(app);

export {firestore};