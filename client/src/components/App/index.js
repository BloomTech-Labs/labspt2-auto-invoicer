// import packages
import React, { Component } from "react";

//import styles
import "./App.css";

// react router methods
import { Route } from "react-router-dom";

//imported components
import SideNavigation from "../SideNavigation";
import SignInModal from "../SignInModal";
import BillingPage from "../../views/BillingPage";
import SignUpModal from "../SignUpModal";
import LandingPage from "../../views/LandingPage";
import CreateInvoice from "../../views/CreateInvoice";
import SettingsPage from "../../views/SettingsPage";

import InvoiceList from "../../views/InvoiceList";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toggleSignIn: false,
      id: 1,
      toggleRegister: false
    };
  }

  signInModal = () => {
    // return the opposite of the current state of toggleSignIn
    return this.setState({ toggleSignIn: !this.state.toggleSignIn });
  };
  signUpModal = () => {
    // return the opposite of the current state of toggleRegister
    return this.setState({ toggleRegister: !this.state.toggleRegister });
  };
  render() {
    const { id } = this.state;
    return (
      <div className="App">
        <header>
          <SideNavigation
            signInModal={this.signInModal}
            signUpModal={this.signUpModal}
          />
        </header>
        {/* check if sigin clicked and open up signin modal or visa-versa */}
        {this.state.toggleSignIn ? (
          <SignInModal click={this.signInModal} />
        ) : null}

        {/* check if sigup clicked and open up signup modal or visa-versa */}
        {this.state.toggleRegister ? (
          <SignUpModal click={this.signUpModal} />
        ) : null}

        <section className="routes-container">
          {/* ROUTES GO HERE
            check if logged in before routing below, and redirect to landing if not loggedIn */}
          <Route exact path={`/user/${id}/billing`} component={BillingPage} />
          <Route
            exact
            path={`/user/${id}/invoice/create`}
            component={CreateInvoice}
          />
          <Route exact path={`/user/${id}/settings`} component={SettingsPage} />
          <Route exact path="/" component={LandingPage} />
          <Route exact path={`/user/${id}/invoices`} component={InvoiceList} />
        </section>
      </div>
    );
  }
}

export default App;
