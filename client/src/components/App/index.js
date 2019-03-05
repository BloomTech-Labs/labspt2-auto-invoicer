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

class App extends Component {
  state = {
    toggleSignIn: false,
    id: 1,
    toggleRegister: false
  };
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
          <SideNavigation signInModal={this.signInModal} />
          {/* check if sigin clicked and open up signin modal or visa-versa */}
          {this.state.toggleSignIn ? (
            <SignInModal click={this.signInModal} />
          ) : null}
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
        </section>
      </div>
    );
  }
}

export default App;
