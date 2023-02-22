import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDKmOnXJsbJm3QriMujlRf5z9Be7NEp6Wk",
  authDomain: "netflex-clone-7f67d.firebaseapp.com",
  projectId: "netflex-clone-7f67d",
  storageBucket: "netflex-clone-7f67d.appspot.com",
  messagingSenderId: "265543005428",
  appId: "1:265543005428:web:3926c39f746ac6d5f99aa1",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const auth = getAuth(app);

export default db;
