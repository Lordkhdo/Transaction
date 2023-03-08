import  {initializeApp} from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import {
  getFirestore,
  getDoc,
  updateDoc,
  getDocs,
  collection,
  deleteDoc,
  doc,
} from "firebase/firestore/lite";


export const firebaseConfig = initializeApp({
  apiKey: "AIzaSyCGtPrXKuLJd8ys4jO-OGKjnc0Wn-1gcBA",
  authDomain: "desafiohuancontrolef.firebaseapp.com",
  projectId: "desafiohuancontrolef",
  storageBucket: "desafiohuancontrolef.appspot.com",
  messagingSenderId: "1072792763679",
  appId: "1:1072792763679:web:6cabf29ea1b41c500dc42a",
}); 

const auth = getAuth(firebaseConfig)
const provider = new GoogleAuthProvider()

const db = getFirestore(firebaseConfig);
const ColecaoDeDadosLiteral = collection(db, "usuarios");

export {auth, provider, db, ColecaoDeDadosLiteral}