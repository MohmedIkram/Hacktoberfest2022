// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFbfV0zWFCS8DnrsusjLg5Rdt0axqZRp0",
  authDomain: "note-taker-vue.firebaseapp.com",
  projectId: "note-taker-vue",
  storageBucket: "note-taker-vue.appspot.com",
  messagingSenderId: "192855684985",
  appId: "1:192855684985:web:bab6fbb8dc2c5de9dd21a8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = getAuth(app);

export { db, auth };
