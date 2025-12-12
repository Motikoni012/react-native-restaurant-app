// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB1DIk0pGBJqTeb8WtuxXA2zdJZYuzLzpw",
  authDomain: "restaurant-app-43b23.firebaseapp.com",
  projectId: "restaurant-app-43b23",
  storageBucket: "restaurant-app-43b23.firebasestorage.app",
  messagingSenderId: "1059641261562",
  appId: "1:1059641261562:web:066bb12a9301dfcbc4b843",
  measurementId: "G-27Z6Y7GKDH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);