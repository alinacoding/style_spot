import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDMOXUpn8Z6nkyKnWAasre7LN1nqGMfZYI",
  authDomain: "style-spot-db.firebaseapp.com",
  projectId: "style-spot-db",
  storageBucket: "style-spot-db.appspot.com",
  messagingSenderId: "337834934349",
  appId: "1:337834934349:web:0b26b952b19364cb599c04",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
