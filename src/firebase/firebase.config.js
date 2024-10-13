// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkMLaWe8JLgbG6vqvEhsuP1Z0Oet1tkh0",
  authDomain: "react-dragon-news-89b3a.firebaseapp.com",
  projectId: "react-dragon-news-89b3a",
  storageBucket: "react-dragon-news-89b3a.appspot.com",
  messagingSenderId: "116235872340",
  appId: "1:116235872340:web:2d689074da3ec373f9e5c1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export the app instance as default
export default app; // Add this line
