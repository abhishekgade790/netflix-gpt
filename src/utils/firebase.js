import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAXUlX0uqCAJqQRlmmwpKn3MdnNW1i2fcU",
  authDomain: "cinenestgpt.firebaseapp.com",
  projectId: "cinenestgpt",
  storageBucket: "cinenestgpt.firebasestorage.app",
  messagingSenderId: "843389552140",
  appId: "1:843389552140:web:80504a2fbdc69392619029",
  measurementId: "G-KZFN5WMLWS"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;
