// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDf4eGx2_mPwzdcA5MnkPNpcnz58VuBv-g",
  authDomain: "fyp-neuberg-p.firebaseapp.com",
  projectId: "fyp-neuberg-p",
  storageBucket: "fyp-neuberg-p.appspot.com",
  messagingSenderId: "517353919122",
  appId: "1:517353919122:web:bd5ec60883bda63e474c4b",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()