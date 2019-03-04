// import packages
import React, { Component } from "react";

//import styles
import "./App.css";

// react router methods
import { Route } from "react-router-dom";

//imported components
import SideNavigation from "../SideNavigation";
import SignInModal from "../SignInModal";
import BillingPage from "../../view/BillingPage";

class App extends Component {
  state = {
    toggleSignIn: false,
    id: 1
  };
  signInModal = () => {
    // return the opposite of the current state of toggleSignIn
    return this.setState({ toggleSignIn: !this.state.toggleSignIn });
  };
  render() {
    const { id } = this.state;
    return (
      <div className="App">
        <SideNavigation signInModal={this.signInModal} />
        {/* check if sigin clicked and open up signin modal or visa-versa */}
        {this.state.toggleSignIn ? (
          <SignInModal click={this.signInModal} />
        ) : null}

        {/* ROUTES GO HERE */}
        <Route exact path={`/user/${id}/billing`} component={BillingPage} />
      </div>
    );
  }
}

export default App;
