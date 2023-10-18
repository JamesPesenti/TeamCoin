// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBxWkUdnJaDDilcnUPE-tocF8g7nYNHSHM",
  authDomain: "teamcoin-5a324.firebaseapp.com",
  projectId: "teamcoin-5a324",
  storageBucket: "teamcoin-5a324.appspot.com",
  messagingSenderId: "49431824318",
  appId: "1:49431824318:web:86b171179a3016a91c5bef"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);

export const FIRESTORE_APP= initializeApp(firebaseConfig)
export const FIRESTORE_DB = getFirestore(FIREBASE_APP)