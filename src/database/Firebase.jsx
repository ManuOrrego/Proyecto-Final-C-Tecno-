
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "firebase/storage";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbHS7hJYT6MY3y1Pu65lS5ezrZn08J7fI",
  authDomain: "c-tecno-solution.firebaseapp.com",
  databaseURL: "https://c-tecno-solution-default-rtdb.firebaseio.com",
  projectId: "c-tecno-solution",
  storageBucket: "c-tecno-solution.appspot.com",
  messagingSenderId: "913307625811",
  appId: "1:913307625811:web:07e31d47f688352e5799a6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const initStorage = getStorage(app);
export const connDatabase = getFirestore(app);