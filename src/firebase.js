import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
import {getStorage} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA7TpyNV8O6b8BwrAaRPsk8oDSfHPxBf1E",
  authDomain: "shop-next-300f1.firebaseapp.com",
  projectId: "shop-next-300f1",
  storageBucket: "shop-next-300f1.appspot.com",
  messagingSenderId: "1006739368972",
  appId: "1:1006739368972:web:2a3a9f0683a5ef606e5229"
};


const firebase = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();
const storage = getStorage();
export {firebase, auth, db, storage};