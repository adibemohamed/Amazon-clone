import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyC_AXZ8M7M0RMzuoqunD8_zsj0g6n7om0I",
    authDomain: "clone-975bf.firebaseapp.com",
    databaseURL: "https://clone-975bf.firebaseio.com",
    projectId: "clone-975bf",
    storageBucket: "clone-975bf.appspot.com",
    messagingSenderId: "515444531745",
    appId: "1:515444531745:web:13b587eff69e54d0fe3960",
    measurementId: "G-E5XPG8QFT7"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  const auth = firebaseApp.auth();


  export  {db, auth};