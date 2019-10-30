import React from "react";
import { AppBar, Toolbar, Typography, List, ListItem, ListItemText, Drawer, Theme } from "@material-ui/core";
import { ListItemIcon } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles, createStyles } from "@material-ui/styles";
import Icon from "@material-ui/core/Icon";
import Register from "./components/register";

const drawerWidth = 240;
const test = makeStyles((theme: Theme) =>
  createStyles({
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`
    },
    drawerStyle: {
      width: drawerWidth
    },
    main: {
      padding: 20,
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`
    }
  })
);

class navMenu {
  public text: string;
  public icon: string;
  constructor(text: string, icon: string) {
    this.text = text;
    this.icon = icon;
  }
}

const App: React.FC = () => {
  const cls = test();
  let nav: navMenu[] = [];
  nav.push(new navMenu("一覧", "view_list"));
  nav.push(new navMenu("登録", "add"));
  nav.push(new navMenu("設定", "settings_application"));

  return (
    <div className="App">
      <CssBaseline />
      <AppBar position="static" className={cls.appBarShift}>
        <Toolbar>
          <Typography variant="h5">WBS CREATER</Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" classes={{ paper: cls.drawerStyle }}>
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
      <main className={cls.main}>
        <Register />
      </main>
    </div>
  );
};

export default App;
