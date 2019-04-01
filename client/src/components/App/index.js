// import packages
import React, { Component } from 'react';
import axios from 'axios';
import queryString from 'query-string';
import jwt from 'jsonwebtoken';
//import styles
import './App.css';

// react router methods
import { Route, withRouter } from 'react-router-dom';

//imported components
import SideNavigation from '../SideNavigation';
import SignInModal from '../SignInModal';
import BillingPage from '../../views/BillingPage';
import SignUpModal from '../SignUpModal';
import LandingPage from '../../views/LandingPage';
import CreateInvoice from '../../views/CreateInvoice';
import SettingsPage from '../../views/SettingsPage';
import ForgotPassModal from '../ForgotPassModal';
import AuthModal from '../AuthModal';

import InvoiceList from '../../views/InvoiceList';
import PasswordResetView from '../../views/PasswordResetView';

import {CompanyConsumer} from '../../contexts/CompanyContext'
import {UserConsumer} from '../../contexts/UserContext'

import {CompanyConsumer} from '../../contexts/CompanyContext'
import {UserConsumer} from '../../contexts/UserContext'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toggleSignIn: false,
      loggedIn: false,   
      id: null,
      toggleRegister: false,
      togglePassForgot: false,
      toggleAuth: false
    };
  }
  componentWillMount() {
    const query = queryString.parse(this.props.location.search);

    if (query.token) {
      window.localStorage.setItem('jwt-auto-invoice', query.token);
    }

    if (window.localStorage.getItem('jwt-auto-invoice')) {
      const token = window.localStorage.getItem('jwt-auto-invoice');
      const decoded = jwt.decode(token, { complete: true });
      const userId = decoded.payload.userId;

      this.setState({ loggedIn: true, id: userId });
    }
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
    axios
      .post('https://api.myautoinvoicer.com/welcome', { ...user })
      .then(res => {
        if (res.status === 201) {
          return this.signUpModal();
        } else {
          // un-disable register button and let user try again.
        }
      });
  };
  sendPasswordReset = email => {
    axios
      .post('https://api.myautoinvoicer.com/password-reset', { ...email })
      .then(res => {
        console.log(res);
      });
  };
  signOut = () => {
    // change login state to update UI of navigation
    this.setState({ loggedIn: false, loggedOutClicked: true });

    /* ternary operator checking if token is available in local storage and deletes if it is */
    return localStorage.getItem('jwt-auto-invoice')
      ? localStorage.removeItem('jwt-auto-invoice')
      : null;
  };
  render() {
    const { id } = this.state;
    return (
      <div className="App">
        <header>
          <SideNavigation
            loggedIn={this.state.loggedIn}
            signInModal={this.signInModal}
            signUpModal={this.signUpModal}
            forgotPassModal={this.forgotPassModal}
            signOut={this.signOut}
            id={id}
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
          {({fetchUser, userState}) => {
            return (
              <CompanyConsumer>
                {({fetchCompany, companyState}) => {
                  return (
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
                      <Route
                        exact
                        path={`/user/${id}/invoices`}
                        render={props => <InvoiceList 
                          id={id} 
                          fetchUser={fetchUser} 
                          user={userState} 
                          fetchCompany={fetchCompany}
                          company={companyState}/>}
                      />
                      <Route exact path={"/password-reset"} component={PasswordResetView} />
                    </section>
                  )
                }} 
              </CompanyConsumer>
            )
          }}
        </UserConsumer>
      </div>
    );
  }
}

export default withRouter(App);
