import React from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Dehaze";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import HomeIcon from "@material-ui/icons/Home";
import AboutIcon from "@material-ui/icons/Code";
import BillingIcon from "@material-ui/icons/Payment";
import SettingsIcon from "@material-ui/icons/Settings";
import InvoicesIcon from "@material-ui/icons/Receipt";
import { NavLink, withRouter } from "react-router-dom";

import "./SideNavigation.css";

class SideNavigation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      loggedIn: false,
      credits: 3
    };
  }

  handleDrawerOpen = () => {
    this.setState({ open: !this.state.open });
  };

  render() {
    const { open } = this.state;
    return (
      <div className="navigation">
        <header position="fixed" className="navbar">
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            onClick={this.handleDrawerOpen}
          >
            <MenuIcon id="hamburger" />
          </IconButton>
          {!this.state.loggedIn ? (
            <ul className="auth-container">
              <button className="authentication-btns">Sign Up</button>
              <button className="authentication-btns">Sign In</button>
            </ul>
          ) : (
            <ul className="auth-container">
              <p className="credits">Credits: {this.state.credits}</p>
              <button className="authentication-btns">Sign Out</button>
            </ul>
          )}
        </header>
        <Drawer
          anchor={document.body.clientWidth < 520 ? "top" : "left"}
          open={open}
        >
          <div id="drawer-container">
            <IconButton onClick={this.handleDrawerOpen}>
              <ChevronLeftIcon id="left-icon" />
            </IconButton>
          </div>
          <Divider />
          {!this.state.loggedIn ? (
            <List className="all-icon-container">
              {[
                { title: "Home", icon: <HomeIcon /> },
                { title: "About", icon: <AboutIcon /> }
              ].map((text, index) => (
                <NavLink
                  exact
                  to={`${text.title}` === "Home" ? "/" : `/${text.title}`}
                  key={text.title}
                  className="icon-container"
                  onClick={() => {
                    this.setState({ open: !open });
                  }}
                >
                  <ListItem className="icon-item">
                    <ListItemIcon>{text.icon}</ListItemIcon>
                    <p className="icon-title">{text.title}</p>
                  </ListItem>
                </NavLink>
              ))}
            </List>
          ) : (
            <List className="all-icon-container">
              {[
                { title: "Invoices", icon: <InvoicesIcon /> },
                { title: "Billing", icon: <BillingIcon /> },
                { title: "Settings", icon: <SettingsIcon /> }
              ].map((text, index) => (
                <NavLink
                  exact
                  to={`/${text.title}`}
                  key={text.title}
                  className="icon-container"
                  onClick={() => {
                    this.setState({ open: !open });
                  }}
                >
                  <ListItem className="icon-item">
                    <ListItemIcon>{text.icon}</ListItemIcon>
                    <p className="icon-title">{text.title}</p>
                  </ListItem>
                </NavLink>
              ))}
            </List>
          )}
        </Drawer>
      </div>
    );
  }
}

export default withRouter(SideNavigation);
