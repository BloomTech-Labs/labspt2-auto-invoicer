// import packages
import React, { Component } from "react";

//import styles
import "./App.css";

//imported components
import SideNavigation from "../SideNavigation";
import SignInModal from "../SignInModal";

class App extends Component {
  state = {
    toggleSignIn: false
  };
  signInModal = () => {
    // return the opposite of the current state of toggleSignIn
    return this.setState({ toggleSignIn: !this.state.toggleSignIn });
  };
  render() {
    return (
      <div className="App">
        <SideNavigation signInModal={this.signInModal} />
        {/* check if sigin clicked and open up signin modal or visa-versa */}
        {this.state.toggleSignIn ? (
          <SignInModal click={this.signInModal} />
        ) : null}
      </div>
    );
  }
}

export default App;
