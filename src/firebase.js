// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB-qJm_YMd6cT8d5zlxpjrwwVAf7NlZlCg",
    authDomain: "react-hook-blog-df56b.firebaseapp.com",
    projectId: "react-hook-blog-df56b",
    storageBucket: "react-hook-blog-df56b.appspot.com",
    messagingSenderId: "774464820138",
    appId: "1:774464820138:web:b629179d9637b1dfb911d3"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);
