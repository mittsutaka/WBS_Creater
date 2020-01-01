import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Register from "./components/Register";
import List from "./components/List";
import SettingView from "./components/Setting";
import { BrowserRouter as Router, Route, Switch as SwicthRouter } from "react-router-dom";
import LeftMenu from "./components/share/Leftmenu";
import TopBar from "./components/share/Topbar";
import firebase from "firebase";
import firebaseConfig from "./firebase-config";

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

//ログインしてみる
let email = "mitsutaka.murao@tryeting.jp";
let password = "mi015hmer";
firebase
  .auth()
  .signInWithEmailAndPassword(email, password)
  .catch(function(error) {
    // Handle Errors here.
    //var errorCode = error.code;
    //var errorMessage = error.message;
  });

// Get a reference to the database service
//Realtime Database
// var database = firebase.database();

// database
//   .ref("/users")
//   .once("value")
//   .then(user => {
//     console.log(user.child("name").val());
//     console.log(user.child("email").val());
//   });

// database.ref("/users").set({
//   name: "ミツタカか",
//   email: "mitsutaka@gmail.com"
// });

//Firestore
let db = firebase.firestore();

db.collection("Users").add({
  first:"mitsutaka",
  last:"murao",
  born:1989
});

const App: React.FC = () => {
  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      console.log(user);
    } else {
      console.log("dameda");
    }
  });

  return (
    <Router>
      <div className="App">
        <CssBaseline />
          <TopBar />
          <LeftMenu />
          <main className="main-content">
            <SwicthRouter>
              <Route path="/List" exact component={List} />
              <Route path="/Register" exact component={Register} />
              <Route path="/Setting" exact component={SettingView} />
            </SwicthRouter>
          </main>
      </div>
    </Router>
  );
};

export default App;
