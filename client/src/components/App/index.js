import React, { Component } from 'react';
import axios from 'axios';
import { Route, withRouter } from 'react-router-dom';
import { saveAs } from 'file-saver';

import { UserConsumer } from '../../contexts/UserContext';
import { CompanyConsumer } from '../../contexts/CompanyContext';

import LandingPage from '../../views/LandingPage';
import BillingPage from '../../views/BillingPage';
import CreateInvoice from '../../views/CreateInvoice';
import SettingsPage from '../../views/SettingsPage';
import InvoiceList from '../../views/InvoiceList';
import InvoiceView from '../../views/InvoiceView';
import SignInModal from '../SignInModal';
import EditInvoiceForm from '../EditInvoiceForm';
import Dashboard from '../Dashboard';
import Navigation from '../Navigation/Navigation';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleSignIn: false,
      loggedIn: false,
      toggleAuth: false
    };
  }

  componentDidMount() {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/user`, {
        withCredentials: true
      })
      .then(res => {
        if (res.data.userId) {
          this.fetchData(res.data.userId);
          this.setState({ loggedIn: true });
          this.props.history.push(`/user/${res.data.userId}/dashboard`);
        }
      })
      .catch(err => console.log(err));
  }

  fetchData = async userId => {
    await this.props.fetchUser(userId);

    if (this.props.companies.length) console.log('Testing Run');
    await this.props.fetchCompany(this.props.companies[0]._id);
    console.log('Testing Again');
  };

  toggleAuthModal = () => {
    return this.setState({ toggleAuth: !this.state.toggleAuth });
  };

  signInModal = () => {
    return this.setState({ toggleSignIn: !this.state.toggleSignIn });
  };

  signOut = () => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/logout`, {
        withCredentials: true
      })
      .then(() => {
        this.setState({ loggedIn: false });
        window.location.replace('/');
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
      .post('https://pdf-server-invoice.herokuapp.com/create-pdf', file)
      .then(() =>
        axios.get('https://pdf-server-invoice.herokuapp.com/fetch-pdf', {
          responseType: 'blob'
        })
      )
      .then(res => {
        const pdfBlob = new Blob([res.data], { type: 'application/pdf' });
        saveAs(pdfBlob, `${file.invoiceNumber}-invoice.pdf`);
      })
      .catch(err => {
        console.log(err);
        return 'Error';
      });
  };

  render() {
    return (
      <UserConsumer>
        {({ userState }) => {
          return (
            <CompanyConsumer>
              {({ companyState, fetchInvoices }) => {
                return (
                  <div className="App">
                    <Navigation
                      user={userState}
                      handleSignIn={this.signInModal}
                      handleSignOut={this.signOut}
                      loggedIn={this.state.loggedIn}
                    />
                    {this.state.toggleSignIn ? (
                      <SignInModal
                        click={this.signInModal}
                        auth={this.toggleAuthModal}
                        forgot={this.forgotPassModal}
                      />
                    ) : null}
                    <section className="routes-container">
                      <Route path="/user/:id/billing" component={BillingPage} />
                      <Route path="/user/:id/dashboard" component={Dashboard} />
                      <Route
                        path="/user/:id/invoice/create"
                        render={props => (
                          <CreateInvoice {...props} click={this.createPDF} />
                        )}
                      />
                      <Route
                        path="/user/:id/settings"
                        component={SettingsPage}
                      />
                      <Route
                        exact
                        path="/"
                        render={props => <LandingPage {...props} />}
                      />
                      <Route
                        path="/user/:id/invoices"
                        render={props => (
                          <InvoiceList {...props} click={this.createPDF} />
                        )}
                      />
                      <Route
                        path="/user/:id/invoice/view"
                        component={InvoiceView}
                      />
                      <Route
                        path="/user/:id/invoice/:invoiceID/edit"
                        render={props => (
                          <EditInvoiceForm
                            {...props}
                            fetchInvoices={fetchInvoices}
                            userID={userState.userID}
                          />
                        )}
                      />
                    </section>
                  </div>
                );
              }}
            </CompanyConsumer>
          );
        }}
      </UserConsumer>
    );
  }
}

export default withRouter(App);
