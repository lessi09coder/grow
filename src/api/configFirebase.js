import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

//usamos variables para ocultar informacion sensible, la cual NO subimos a ningun lado, pero damos las variables originales a quien las necesita.
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
export const db = getFirestore(app);