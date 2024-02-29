// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

  const firebaseConfig = {
    apiKey: "AIzaSyCIO7HC4BflPzh7AT0Ycfe_kKBNhqqDRmI",
    authDomain: "morpiax-alpha.firebaseapp.com",
    databaseURL: "https://morpiax-alpha-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "morpiax-alpha",
    storageBucket: "morpiax-alpha.appspot.com",
    messagingSenderId: "157426728474",
    appId: "1:157426728474:web:ccd0eacc35e0501153dba3",
    measurementId: "G-EDM8YEN9TG"
  };
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  export const db = getDatabase(app);
