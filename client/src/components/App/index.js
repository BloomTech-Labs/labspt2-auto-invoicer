// import packages
import React, { Component } from "react";
import axios from "axios";
import { saveAs } from "file-saver";
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

import InvoiceList from "../../views/InvoiceList";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toggleSignIn: false,
      id: 1,
      toggleRegister: false,
      togglePassForgot: false
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
  forgotPassModal = () => {
    this.setState({
      togglePassForgot: !this.state.togglePassForgot
    });
    // added a set timeout to be able to close both modals at once
    setTimeout(() => {
      return this.signInModal();
    }, 0);
  };
  createPDF = () => {
    const file = {
      addressFrom: "Happy Inc.\n123 Happy St.\nAtlanta, GA 30075",
      addressTo: "Happy Inc.\n123 Happy St.\nAtlanta, GA 30075",
      amountPaid: "0.00",
      balanceDue: "10.00",
      currencySelection: "US Dollar (USD)",
      date: "10-10-2019",
      discount: "0",
      invoiceDueSelection: "after 45 days",
      invoiceItems: [
        { amount: "10.00", item: "BELL", quantity: "10", rate: "1.00" }
      ],
      invoiceNotes:
        "this is just a test\nthis is just a test\nthis is just a test\nthis is just a test\nthis is just a test\nthis is just a test\nthis is just a test\n",
      invoiceNumber: "123456",
      invoiceTerms: "this is just a test",
      languageSelection: "English (US)",
      shipping: "2.00",
      subtotal: "10.00",
      tax: "0.07",
      total: "12.70"
    };

    axios
      .post("https://pdf-generator-server.herokuapp.com/create-pdf", file)
      .then(() =>
        axios.get("https://pdf-generator-server.herokuapp.com/fetch-pdf", { responseType: "blob" })
      )
      .then(res => {
        const pdfBlob = new Blob([res.data], { type: "application/pdf" });
        saveAs(pdfBlob, `${file.invoiceNumber}-invoice.pdf`);
      })
      .catch(err => {
        return "Error";
      });
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
          <SignInModal click={this.signInModal} forgot={this.forgotPassModal} />
        ) : null}

        {/* check if sigup clicked and open up signup modal or visa-versa */}
        {this.state.toggleRegister ? (
          <SignUpModal click={this.signUpModal} />
        ) : null}

        {/* check if password forgot clicked and open up password modal or visa-versa */}
        {this.state.togglePassForgot ? (
          <ForgotPassModal
            click={() => {
              this.forgotPassModal();
              this.signInModal();
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
            render={props => <CreateInvoice click={this.createPDF} />}
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
        </section>
      </div>
    );
  }
}

export default App;
