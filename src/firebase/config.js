// filepath: c:\Users\USER\Desktop\zizi-app\project\src\firebase\config.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAI4-YpPWje8E-jihDykYLugwz69uBDRus",
  authDomain: "zizi-1389b.firebaseapp.com",
  projectId: "zizi-1389b",
  storageBucket: "zizi-1389b.firebasestorage.app",
  messagingSenderId: "160528403781",
  appId: "1:160528403781:web:bd39ce04c19baba087c22c",
  measurementId: "G-0GEW5L06V4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app); // Initialize Firebase Auth

export { app, analytics, auth }; // Export auth