import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Register from "./components/Register";
import List from "./components/List";
import SettingView from "./components/Setting";
import { BrowserRouter as Router, Route, Switch as SwicthRouter } from "react-router-dom";
import LeftMenu from "./components/share/Leftmenu";
import TopBar from "./components/share/Topbar";
import { firebaseAnalytics, firebaseAuth } from "./firebase";

// Initialize Firebase
firebaseAnalytics();
firebaseAuth();

const App: React.FC = () => {
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
