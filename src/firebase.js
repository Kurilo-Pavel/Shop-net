import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth"
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBgeldO805vsI1CgoVPK8msy9WLbH9IhNw",
  authDomain: "shope-net.firebaseapp.com",
  projectId: "shope-net",
  storageBucket: "shope-net.appspot.com",
  messagingSenderId: "925313605699",
  appId: "1:925313605699:web:cf4f160aa0819196f574f6"
};

const firebase = initializeApp(firebaseConfig);
const auth = getAuth();
export {firebase, auth}