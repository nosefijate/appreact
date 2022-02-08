import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDZWAyfJRcFNxCfoQfEjIn2VlufWh0bIgw",
    authDomain: "ecommerce-llera.firebaseapp.com",
    projectId: "ecommerce-llera",
    storageBucket: "ecommerce-llera.appspot.com",
    messagingSenderId: "452830003847",
    appId: "1:452830003847:web:7d998377fd6f2566a22e22",
    measurementId: "G-ZK1TT9YDQ2"
  }
  const app = initializeApp(firebaseConfig)
  export const db = getFirestore(app)