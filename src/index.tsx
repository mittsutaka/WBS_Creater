import React from "react";
import ReactDOM from "react-dom";
import "ress";
import App from "./App";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import "./style.scss";
import firebase from "firebase";
import firebaseConfig from "./firebase-config";

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
// Get a reference to the database service
var database = firebase.database();

database.ref("/users").once("value").then((user)=>{
    console.log(user.child("name").val());
    console.log(user.child("email").val());
});

let key = database.ref("/users").set({
  name:"ミツタカ",
  email:"mitsutaka@gmail.com"
});

console.log(key);

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
