import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA8dJd-wy-ZbnOit_-RiJeW-PQL2oLvRf0",
  authDomain: "just-us-chat.firebaseapp.com",
  projectId: "just-us-chat",
  storageBucket: "just-us-chat.appspot.com",
  messagingSenderId: "572664812565",
  appId: "1:572664812565:web:03776d303818ed90d1aa1c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
