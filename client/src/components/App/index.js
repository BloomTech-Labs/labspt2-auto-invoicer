import React, { Component } from "react";
import axios from "axios";
import { Route, withRouter } from "react-router-dom";
import { saveAs } from "file-saver";
import { CompanyConsumer } from "../../contexts/CompanyContext";
import { UserConsumer } from "../../contexts/UserContext";

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
import InvoiceView from "../../views/InvoiceView";
import EditInvoiceView from "../../views/EditInvoiceView";
import PasswordResetView from "../../views/PasswordResetView";

import "./App.css";
import EditInvoiceForm from "../EditInvoiceForm/index";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleSignIn: false,
      loggedIn: false,
      toggleRegister: false,
      togglePassForgot: false,
      toggleAuth: false
    };
  }

  componentDidMount() {
    axios
      .get("https://api.myautoinvoicer.com/user", { withCredentials: true })
      .then(res => {
        if (res.data.userId) {
          this.fetchData(res.data.userId);
          // this.fetchData("5c8d88c17fef7140f485950f")
          this.setState({ loggedIn: true });
        }
      })
      .then()
      .catch(err => console.log(err));
  }

  fetchData = async userId => {
    await this.props.fetchUser(userId);
    if (this.props.companies.length)
      await this.props.fetchCompany(this.props.companies[0]._id);
  };

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
    // disable register button
    axios
      .post("https://api.myautoinvoicer.com/welcome", { ...user })
      .then(res => {
        if (res.status === 201) {
          return this.signUpModal();
        }
        // un-disable register button and let user try again.
      });
  };

  sendPasswordReset = email => {
    axios
      .post("https://api.myautoinvoicer.com/password-reset", { ...email })
      .then(res => {
        console.log(res);
      });
  };

  signOut = () => {
    axios
      .get("https://api.myautoinvoicer.com/logout", { withCredentials: true })
      .then(() => {
        this.setState({ loggedIn: false });
        window.location.replace("/");
      })
      .catch(err => console.log(err));
  };

  createPDF = formPayload => {
    const file = {
      addressFrom: formPayload.addressFrom,
      addressTo: formPayload.addressTo,
      amountPaid: formPayload.amountPaid,
      balanceDue: formPayload.balanceDue,
      stateRegionTo: formPayload.stateRegionTo,
      zipCodeTo: formPayload.zipCodeTo,
      cityTo: formPayload.cityTo,
      clientEmailTo: formPayload.clientEmailTo,
      currencySelection: formPayload.currencySelection,
      date: formPayload.selectedDate,
      discount: formPayload.discount,
      invoiceDueSelection: formPayload.invoiceDueDate,
      // invoiceItems: [
      //   { amount: "10.00", item: "BELL", quantity: "10", rate: "1.00" }
      // ],
      invoiceNotes: formPayload.invoiceNotes,
      invoiceNumber: formPayload.invoiceNumber,
      invoiceTerms: formPayload.invoiceTerms,
      languageSelection: formPayload.languageSelection,
      shipping: formPayload.shipping,
      subtotal: formPayload.subtotal,
      tax: formPayload.tax,
      total: formPayload.total
    };
    axios
      .post("https://pdf-server-invoice.herokuapp.com/create-pdf", file)
      .then(() =>
        axios.get("https://pdf-server-invoice.herokuapp.com/fetch-pdf", {
          responseType: "blob"
        })
      )
      .then(res => {
        const pdfBlob = new Blob([res.data], { type: "application/pdf" });
        saveAs(pdfBlob, `${file.invoiceNumber}-invoice.pdf`);
      })
      .catch(err => {
        console.log(err);
        return "Error";
      });
  };

  render() {
    return (
      <div className="App">
        <header>
          <SideNavigation
            loggedIn={this.state.loggedIn}
            signInModal={this.signInModal}
            signUpModal={this.signUpModal}
            forgotPassModal={this.forgotPassModal}
            signOut={this.signOut}
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
        <UserConsumer>
          {({ userState }) => {
            return (
              <CompanyConsumer>
                {({ companyState }) => {
                  return (
                    <section className="routes-container">
                      {/* ROUTES GO HERE
                        check if logged in before routing below, and redirect to landing if not loggedIn */}
                      <Route
                        exact
                        path="/user/:id/billing"
                        component={BillingPage}
                      />
                      <Route
                        exact
                        path="/user/:id/invoice/create"
                        render={props => (
                          <CreateInvoice {...props} click={this.createPDF} />
                        )}
                      />

                      <Route
                        exact
                        path="/user/:id/settings"
                        component={SettingsPage}
                      />
                      <Route
                        exact
                        path="/"
                        render={props => (
                          <LandingPage {...props} click={this.signUpModal} />
                        )}
                      />
                      <Route
                        exact
                        path="/user/:id/invoices"
                        render={props => (
                          <InvoiceList
                            {...props}
                            user={userState}
                            company={companyState}
                          />
                        )}
                      />
                      {/* adding routes for InvoiceView and EditInvoice components */}
                      <Route
                        exact
                        path="/user/:id/invoice/view"
                        component={InvoiceView}
                      />
                      <Route
                        exact
                        path="/user/:id/invoice/:invoiceID/edit"
                        render={props => <EditInvoiceForm {...props} />}
                      />
                    </section>
                  );
                }}
              </CompanyConsumer>
            );
          }}
        </UserConsumer>
      </div>
    );
  }
}

export default withRouter(App);
