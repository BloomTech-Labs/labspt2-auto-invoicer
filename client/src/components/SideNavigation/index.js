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
import { NavLink, withRouter, Redirect, Link } from "react-router-dom";

// imported css here
import "./SideNavigation.css";

// imported components here

class SideNavigation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      loggedIn: false,
      credits: 3,
      loggedOutClicked: false
    };
  }

  handleDrawerOpen = () => {
    this.setState({ open: !this.state.open });
  };

  signOut = () => {
    this.setState({ loggedIn: false, loggedOutClicked: true });

    return localStorage.getItem("jwt-auto-invoice")
      ? localStorage.removeItem("jwt-auto-invoice")
      : null;
  };

  signInModal = () => {
    return this.props.signInModal();
  };
  render() {
    const { open, loggedIn, loggedOutClicked } = this.state;
    return (
      <div className="navigation">
        {loggedOutClicked ? <Redirect to="/" /> : null}
        <header position="fixed" className="navbar">
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            onClick={this.handleDrawerOpen}
          >
            <MenuIcon id="hamburger" />
          </IconButton>
          {!loggedIn ? (
            <ul className="auth-container">
              <button className="authentication-btns">Sign Up</button>
              <button
                className="authentication-btns"
                onClick={this.signInModal}
              >
                Sign In
              </button>
            </ul>
          ) : (
            <ul className="auth-container">
              <p className="credits">Credits: {this.state.credits}</p>
              <Link to="/" id="signOut" onClick={this.signOut}>
                Sign Out
              </Link>
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
          {!loggedIn ? (
            <List className="all-icon-container">
              {[
                { title: "Home", icon: <HomeIcon /> },
                { title: "About", icon: <AboutIcon /> }
              ].map((text, index) => {
                const { title, icon } = text;
                return (
                  <NavLink
                    exact
                    to={`${title}` === "Home" ? "/" : `/${title}`}
                    key={title}
                    className="icon-container"
                    onClick={() => {
                      this.setState({ open: !open });
                    }}
                  >
                    <ListItem className="icon-item">
                      <ListItemIcon>{icon}</ListItemIcon>
                      <p className="icon-title">{title}</p>
                    </ListItem>
                  </NavLink>
                );
              })}
            </List>
          ) : (
            <List className="all-icon-container">
              {[
                { title: "Invoices", icon: <InvoicesIcon /> },
                { title: "Billing", icon: <BillingIcon /> },
                { title: "Settings", icon: <SettingsIcon /> }
              ].map((text, index) => {
                const { title, icon } = text;
                return (
                  <NavLink
                    exact
                    to={`/${title}`}
                    key={title}
                    className="icon-container"
                    onClick={() => {
                      this.setState({ open: !open });
                    }}
                  >
                    <ListItem className="icon-item">
                      <ListItemIcon>{icon}</ListItemIcon>
                      <p className="icon-title">{title}</p>
                    </ListItem>
                  </NavLink>
                );
              })}
            </List>
          )}
        </Drawer>
      </div>
    );
  }
}

export default withRouter(SideNavigation);
