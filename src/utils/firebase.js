import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBfZdwH6EEh8jj047HPGJLHHy8q-saxedo",
    authDomain: "netflix-gpt1-231b7.firebaseapp.com",
    projectId: "netflix-gpt1-231b7",
    storageBucket: "netflix-gpt1-231b7.firebasestorage.app",
    messagingSenderId: "701175896666",
    appId: "1:701175896666:web:053b7e6a90f69e755bd663",
    measurementId: "G-BMBXVDW48D"
  };


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;
