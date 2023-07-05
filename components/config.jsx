// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, Firestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBvvdlrzG6v9sk68YOZNLdFikIf_gb7E-g",
    authDomain: "projeto-firebase-6db3e.firebaseapp.com",
    projectId: "projeto-firebase-6db3e",
    storageBucket: "projeto-firebase-6db3e.appspot.com",
    messagingSenderId: "230084600359",
    appId: "1:230084600359:web:2710f6da8df2bc26ad2402"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db =  getFirestore(app);
export const auth = getAuth(app);
