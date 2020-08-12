import firebase from "firebase/app";
import "firebase/firestore";

const firebaseApp = firebase.initializeApp({
  //your config
});

const db = firebaseApp.firestore();

export { db };
