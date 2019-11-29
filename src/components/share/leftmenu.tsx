import React from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { Link } from "react-router-dom";
import { ListItemIcon } from "@material-ui/core";
import Icon from "@material-ui/core/Icon";


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

const LeftMenu: React.FC = () => {
  let nav: navMenu[] = [];
  nav.push(new navMenu("一覧", "view_list", "/List"));
  nav.push(new navMenu("登録", "add", "/Register"));
  nav.push(new navMenu("設定", "settings_application", "/Setting"));
  return (
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
  );
};

export default LeftMenu;