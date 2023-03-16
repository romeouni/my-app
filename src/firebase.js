import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC0gbzJNHludAHCe8tfAo9hu-Om46C1bIU",
    authDomain: "rahul-test-ec4d4.firebaseapp.com",
    projectId: "rahul-test-ec4d4",
    storageBucket: "rahul-test-ec4d4.appspot.com",
    messagingSenderId: "979742175606",
    appId: "1:979742175606:web:d2cfc5088a95c788498a57",
    measurementId: "G-MBWJQZQKM1"
};





//Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//Initialize Firebase Auth
export const auth = getAuth(app);

//Initialize db

export const db = getFirestore(app);