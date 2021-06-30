import firebase from "firebase";

console.log('firebase');

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: "ajeandouble-tdr.firebaseapp.com",
    projectId: "ajeandouble-tdr",
    storageBucket: "ajeandouble-tdr.appspot.com",
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
}

firebase.initialize();
const auth = firebase.auth();

export default auth;