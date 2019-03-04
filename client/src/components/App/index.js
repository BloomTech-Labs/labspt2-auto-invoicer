// import packages
import React, { Component } from "react";

//import styles
import "./App.css";

//imported components
import SideNavigation from "../SideNavigation";
import SignInModal from "../SignInModal";
import SignUpModal from "../SignUpModal";

class App extends Component {
  state = {
    toggleSignIn: false,
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
    return (
      <div className="App">
        <SideNavigation
          signInModal={this.signInModal}
          signUpModal={this.signUpModal}
        />
        {/* check if sigin clicked and open up signin modal or visa-versa */}
        {this.state.toggleSignIn ? (
          <SignInModal click={this.signInModal} />
        ) : null}
        {/* check if sigup clicked and open up signup modal or visa-versa */}
        {this.state.toggleRegister ? (
          <SignUpModal click={this.signUpModal} />
        ) : null}
      </div>
    );
  }
}

export default App;
