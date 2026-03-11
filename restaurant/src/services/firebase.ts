import { initializeApp } from "firebase/app";
import {
  initializeAuth, getAuth
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB1DIk0pGBJqTeb8WtuxXA2zdJZYuzLzpw",
  authDomain: "restaurant-app-43b23.firebaseapp.com",
  projectId: "restaurant-app-43b23",
  storageBucket: "restaurant-app-43b23.firebasestorage.app",
  messagingSenderId: "1059641261562",
  appId: "1:1059641261562:web:066bb12a9301dfcbc4b843",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);


export const db = getFirestore(app);