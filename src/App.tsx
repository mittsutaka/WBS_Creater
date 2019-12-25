import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Register from "./components/register";
import List from "./components/List";
import SettingView from "./components/setting";
import { BrowserRouter as Router, Route, Switch as SwicthRouter } from "react-router-dom";
import LeftMenu from "./components/share/leftmenu";
import TopBar from "./components/share/topbar";
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
var database = firebase.database();

database
  .ref("/users")
  .once("value")
  .then(user => {
    console.log(user.child("name").val());
    console.log(user.child("email").val());
  });

database.ref("/users").set({
  name: "ミツタカか",
  email: "mitsutaka@gmail.com"
});

const App: React.FC = () => {
  let flag: boolean = false;
  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      console.log(user);
      flag = true;
    } else {
      flag = false;
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
