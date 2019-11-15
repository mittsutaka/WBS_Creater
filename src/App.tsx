import React from "react";
import { AppBar, Toolbar, Typography, List, ListItem, ListItemText, Drawer } from "@material-ui/core";
import { ListItemIcon } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import Icon from "@material-ui/core/Icon";
import RegisterView from "./components/register";
import ListView from "./components/list";
import SettingView from "./components/setting";
import { BrowserRouter as Router, Link, Route, Switch as SwicthRouter } from "react-router-dom";

class navMenu {
  public text: string;
  public icon: string;
  public link: string;
  constructor(text: string, icon: string, link: string) {
    this.text = text;
    this.icon = icon;
    this.link = link;
  }
}

const App: React.FC = () => {
  let nav: navMenu[] = [];
  nav.push(new navMenu("一覧", "view_list", "/"));
  nav.push(new navMenu("登録", "add", "/RegisterView"));
  nav.push(new navMenu("設定", "settings_application", "/SettingView"));

  return (
    <Router>
      <div className="App">
        <CssBaseline />
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h5">WBS CREATER</Typography>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" classes={{ paper: "drawer" }}>
          <List>
            {nav.map((nav, index) => (
              <Link to={nav.link} key={index}>
                <ListItem button>
                  <ListItemIcon>
                    <Icon>{nav.icon}</Icon>
                  </ListItemIcon>
                  <ListItemText primary={nav.text} />
                </ListItem>
              </Link>
            ))}
          </List>
        </Drawer>
        <main className="main-content">
          <SwicthRouter>
            <Route path="/" exact component={ListView} />
            <Route path="/RegisterView" exact component={RegisterView} />
            <Route path="/SettingView" exact component={SettingView} />
          </SwicthRouter>
        </main>
      </div>
    </Router>
  );
};

export default App;
