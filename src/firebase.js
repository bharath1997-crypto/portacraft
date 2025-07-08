// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";  // <-- import Firestore

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7UyRo6TNlm5d1Cizvo3n8nsXzMfkTxaQ",
  authDomain: "portacraft-f7007.firebaseapp.com",
  projectId: "portacraft-f7007",
  storageBucket: "portacraft-f7007.firebasestorage.app",
  messagingSenderId: "993821688626",
  appId: "1:993821688626:web:7ba18460091fd83bafcd2b",
  measurementId: "G-P5DLYQ7T10"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firestore and export it
const db = getFirestore(app);

export { db };  // <-- named export for db
