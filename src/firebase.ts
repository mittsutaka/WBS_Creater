import firebase from "firebase";
import firebaseConfig from "./firebase-config";

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const firebaseAnalytics = () => firebase.analytics();

//Authorize
export const firebaseAuth = () => {
    let email = "mitsutaka.murao@tryeting.jp";
    let password = "mi015hmer";
    firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .catch(function (error) {
            // Handle Errors here.
            //var errorCode = error.code;
            //var errorMessage = error.message;
        });
}

//Firestore
export const firebaseDb = firebase.firestore();