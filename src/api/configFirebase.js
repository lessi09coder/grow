// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCc_2dHr5PCXKtIWWxp1pP8SyDsCNHpICk",
  authDomain: "grow-eb19c.firebaseapp.com",
  projectId: "grow-eb19c",
  storageBucket: "grow-eb19c.appspot.com",
  messagingSenderId: "206887810562",
  appId: "1:206887810562:web:f6a405c54d38475126191b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Firestore para acceder a la base de datos
export const db = getFirestore(app)



//seguir mirando en 1:35:00 , 10/11 - Firebase I