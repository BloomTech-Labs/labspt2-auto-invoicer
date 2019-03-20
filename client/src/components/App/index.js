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
import ForgotPassModal from "../ForgotPassModal";
import AuthModal from "../AuthModal";

import InvoiceList from "../../views/InvoiceList";
import PasswordResetView from "../../views/PasswordResetView";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toggleSignIn: false,
      id: 1,
      toggleRegister: false,
      togglePassForgot: false,
      toggleAuth: false
    };
  }
  toggleAuthModal = () => {
    return this.setState({ toggleAuth: !this.state.toggleAuth });
  };
  signInModal = () => {
    // return the opposite of the current state of toggleSignIn
    return this.setState({ toggleSignIn: !this.state.toggleSignIn });
  };
  signUpModal = () => {
    // return the opposite of the current state of toggleRegister
    return this.setState({ toggleRegister: !this.state.toggleRegister });
  };
  forgotPassModal = () => {
    this.setState({
      togglePassForgot: !this.state.togglePassForgot
    });
    // added a set timeout to be able to close both modals at once
    setTimeout(() => {
      return this.signInModal();
    }, 0);
  };
  sendWelcomeEmail = user => {
    // send an email object up with user email
    //disable register button
    /* =======================================================
     ** commented to save api calls *========================================================== */
    // axios.post("https://2pkp3hqyc6.execute-api.us-east-1.amazonaws.com/dev/welcome", { ...user }).then(res => {
    //   if (res.status === 201) {
    //     return this.signUpModal();
    //   } else {
    //     // un-disable register button and let user try again.
    //   }
    // });
  };
  sendPasswordReset = email => {
    /* =======================================================
     ** commented to save api calls *========================================================== */
    // axios
    //   .post(
    //     "https://2pkp3hqyc6.execute-api.us-east-1.amazonaws.com/dev/password-reset",
    //     { ...email }
    //   )
    //   .then(res => {
    //     console.log(res);
    //   });
  };
  render() {
    const { id } = this.state;
    return (
      <div className="App">
        <header>
          <SideNavigation
            signInModal={this.signInModal}
            signUpModal={this.signUpModal}
            forgotPassModal={this.forgotPassModal}
          />
        </header>
        {/* check if sigin clicked and open up signin modal or visa-versa */}
        {this.state.toggleSignIn ? (
          <SignInModal
            click={this.signInModal}
            auth={this.toggleAuthModal}
            forgot={this.forgotPassModal}
          />
        ) : null}

        {/* check if sigup clicked and open up signup modal or visa-versa */}
        {this.state.toggleRegister ? (
          <SignUpModal
            click={this.signUpModal}
            welcome={this.sendWelcomeEmail}
          />
        ) : null}

        {/* check if password forgot clicked and open up password modal or visa-versa */}
        {this.state.togglePassForgot ? (
          <ForgotPassModal
            click={() => {
              this.signInModal();
              this.forgotPassModal();
            }}
            passwordReset={this.sendPasswordReset}
          />
        ) : null}
        {this.state.toggleAuth ? (
          <AuthModal
            click={() => {
              this.signInModal();
              this.toggleAuthModal();
            }}
          />
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
          <Route
            exact
            path="/"
            render={props => (
              <LandingPage {...props} click={this.signUpModal} />
            )}
          />
          <Route exact path={`/user/${id}/invoices`} component={InvoiceList} />
          <Route exact path={"/password-reset"} component={PasswordResetView} />
        </section>
      </div>
    );
  }
}

export default App;
