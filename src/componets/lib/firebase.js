
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "chatapp-26c5f.firebaseapp.com",
  projectId: "chatapp-26c5f",
  storageBucket: "chatapp-26c5f.firebasestorage.app",
  messagingSenderId: "335247456919",
  appId: "1:335247456919:web:368c3647fdf30ed16007d2"
};

const app = initializeApp(firebaseConfig);

export const auth= getAuth(app)
export const db= getFirestore(app)
