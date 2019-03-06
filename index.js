import React from "react";
// list of material ui components
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";

// react router dom methods
import { NavLink, withRouter, Redirect } from "react-router-dom";

// list of icons used in the side navigation component
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Dehaze";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import HomeIcon from "@material-ui/icons/Home";
import AboutIcon from "@material-ui/icons/Code";
import BillingIcon from "@material-ui/icons/Payment";
import SettingsIcon from "@material-ui/icons/Settings";
import InvoicesIcon from "@material-ui/icons/Receipt";


// imported css here
import "./SideNavigation.css";

// imported components here
import AuthLanding from "../AuthLanding";
import AuthSecured from "../AuthSecured";

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
    // change open state to true || false to open or close navigation
    this.setState({ open: !this.state.open });
  };

  signOut = () => {
    // change login state to update UI of navigation
    this.setState({ loggedIn: false, loggedOutClicked: true });

    /* ternary operator checking if token is available in local storage and deletes if it is */
    return localStorage.getItem("jwt-auto-invoice")
      ? localStorage.removeItem("jwt-auto-invoice")
      : null;
  };

  signInModal = () => {
    // signInModal from App Component
    return this.props.signInModal();
  };
  signUpModal = () => {
    return this.props.signUpModal();
  };
  render() {
    // deconstruct state to get a list of needed attributes
    const { open, loggedIn, loggedOutClicked } = this.state;
    return (
      <div className="navigation">
        {/* if log out is clicked it will redirect to landing */}
        {loggedOutClicked ? <Redirect to="/" /> : null}
        <header position="fixed" className="navbar">
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            onClick={this.handleDrawerOpen}
          >
            <MenuIcon id="hamburger" />
          </IconButton>
          {/* if logged in show signup/signin else show */}
          {!loggedIn ? (
            <AuthLanding
              signInModal={this.signInModal}
              signUpModal={this.signUpModal}
            />
          ) : (
            <AuthSecured
              {...this.props}
              signOut={this.signOut}
              credits={this.state.credits}
            />
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
          {/* if not logged in show public routes else show secured */}
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
                const lowerTitle = title.toLowerCase();
                return (
                  <NavLink
                    exact
                    to={`/user/1/${lowerTitle}`}
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
