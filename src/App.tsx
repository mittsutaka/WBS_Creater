import React from "react";
import { AppBar, Toolbar, Typography, List, ListItem, ListItemText, Drawer } from "@material-ui/core";
import { ListItemIcon } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import Icon from "@material-ui/core/Icon";
import Register from "./components/register";

class navMenu {
  public text: string;
  public icon: string;
  constructor(text: string, icon: string) {
    this.text = text;
    this.icon = icon;
  }
}

const App: React.FC = () => {
  let nav: navMenu[] = [];
  nav.push(new navMenu("一覧", "view_list"));
  nav.push(new navMenu("登録", "add"));
  nav.push(new navMenu("設定", "settings_application"));

  return (
    <div className="App">
      <CssBaseline />
      <AppBar position="static" className="top-bar">
        <Toolbar>
          <Typography variant="h5">WBS CREATER</Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" classes={{ paper: "drawer" }}>
        <List>
          {nav.map((nav, index) => (
            <ListItem button>
              <ListItemIcon>
                <Icon>{nav.icon}</Icon>
              </ListItemIcon>
              <ListItemText primary={nav.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <main className="main-content">
        <Register />
      </main>
    </div>
  );
};

export default App;
