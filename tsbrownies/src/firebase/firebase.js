// Import the functions you need from the SDKs you need
import  firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC9lVqQAIgajLVQmLu_vGFI-N9ne59E4BI",
    authDomain: "final-1f02a.firebaseapp.com",
    projectId: "final-1f02a",
    storageBucket: "final-1f02a.appspot.com",
    messagingSenderId: "724045464832",
    appId: "1:724045464832:web:38f4f79ce8028adfa9dfe5"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
export {db, auth}