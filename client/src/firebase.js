// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC2G1gdzelxrxalMfbfQ64QGzj_ynljX_k",
  authDomain: "sociallogin-7c71c.firebaseapp.com",
  projectId: "sociallogin-7c71c",
  storageBucket: "sociallogin-7c71c.appspot.com",
  messagingSenderId: "604430247117",
  appId: "1:604430247117:web:33e4b6a1ffae7484457584",
  measurementId: "G-63ESXXSN42"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const GoogleAuthProvider = new firebase.auth.GoogleAuthProvider();
export const FacebookAuthProvider = new firebase.auth.FacebookAuthProvider();