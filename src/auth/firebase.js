// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC5zeqTa6JZK12UXxfv7YknmQS2fez_EuY",
  authDomain: "my-expenses-cf95d.firebaseapp.com",
  databaseURL: "https://my-expenses-cf95d.firebaseio.com",
  projectId: "my-expenses-cf95d",
  storageBucket: "my-expenses-cf95d.appspot.com",
  messagingSenderId: "584599269295",
  appId: "1:584599269295:web:1d52b59770089094",
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();

export default firebase;
