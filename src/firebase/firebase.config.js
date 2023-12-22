import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBBW1qhMoQlCUtCEMNWEtMGaoVB6W6A_DI",
  authDomain: "phones-client-project.firebaseapp.com",
  projectId: "phones-client-project",
  storageBucket: "phones-client-project.appspot.com",
  messagingSenderId: "934812223877",
  appId: "1:934812223877:web:9a8856f59a25e129359cec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);