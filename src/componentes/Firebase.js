// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZWAyfJRcFNxCfoQfEjIn2VlufWh0bIgw",
  authDomain: "ecommerce-llera.firebaseapp.com",
  projectId: "ecommerce-llera",
  storageBucket: "ecommerce-llera.appspot.com",
  messagingSenderId: "452830003847",
  appId: "1:452830003847:web:cf6ea8b35997c4eda22e22",
  measurementId: "G-GWS69FEKQ7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);