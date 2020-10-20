import firebase from "firebase";

const firebaseConfig = {
  // add your settings here
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebaseApp.auth();

export { db, auth };
