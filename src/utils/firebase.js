import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyA22fhX2yGppF5um8ZGBthmek5jD5qNjEA",
    authDomain: "netflixgpt-790.firebaseapp.com",
    projectId: "netflixgpt-790",
    storageBucket: "netflixgpt-790.firebasestorage.app",
    messagingSenderId: "108977465320",
    appId: "1:108977465320:web:fe576efa0b54d3f7bfe65d",
    measurementId: "G-PYB2FV8BH7"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;
