import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {firebaseConfig} from './Config'   // this file is in .gitignore
import {getAuth} from 'firebase/auth'


const firebaseApp = initializeApp(firebaseConfig);

// initializing firestore
const db = getFirestore(firebaseApp); // For Using Database

// initializing authentication
const auth = getAuth()


export { db, auth };
