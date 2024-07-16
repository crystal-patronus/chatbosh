import {GoogleAuthProvider, getAuth } from "firebase/auth";
import {initializeApp} from "firebase/app";
import {firebaseConfig} from "./config";

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();