import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // Import Firestore

// Firebase configuration object
const firebaseConfig = {
    apiKey: "AIzaSyAXm2yW7vBfxj5epbUgdHLbbrS81dk4jZU",
    authDomain: "test-45e45.firebaseapp.com",
    projectId: "test-45e45",
    storageBucket: "test-45e45.appspot.com",
    messagingSenderId: "933586364484",
    appId: "1:933586364484:web:2e9699fe73d8831359b411"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and export it
export const auth = getAuth(app);

// Initialize Firestore and export it
export const db = getFirestore(app);