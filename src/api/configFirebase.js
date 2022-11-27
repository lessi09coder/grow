import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

//usamos variables para ocultar informacion sensible, la cual NO subimos a ningun lado, pero damos las variables originales a quien las necesita.
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Firestore para acceder a la base de datos
export const db = getFirestore(app);