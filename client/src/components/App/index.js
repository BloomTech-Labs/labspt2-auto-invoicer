import React, { useState, useEffect, useContext} from 'react';
import axios from 'axios';
import { Route, withRouter } from 'react-router-dom';
import { saveAs } from 'file-saver';

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

import UserContext from '../../context/UserContext'
import './App.css';

const App = props => {

  const [loggedIn, setLoggedIn] = useState(false)
  const [toggleAuth, setToggleAuth] = useState(false)
  const [toggleSignIn, setToggleSignIn] = useState(false)


  const context = useContext(UserContext);
  
  const getUser = async () => {
    await context.getUser()
    setLoggedIn(true)
    console.log('I ran 1')
    await context.getCompany(context.user.defaultCompany);
    console.log('I ran 2')
    props.history.push(`/user/${context.user._id}/dashboard`);
  };

  useEffect(() => {
    getUser();
    console.log('this is my context', context);
  }, [loggedIn])

  const toggleAuthModal = () => {
    return setToggleAuth(!toggleAuth);
  };

  const signInModal = () => {
    return setToggleSignIn(!toggleSignIn);
  };

  const signOut = () => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/logout`, {
        withCredentials: true
      })
      .then(() => {
        setLoggedIn(!loggedIn);
        window.location.replace('/');
      })
      .catch(err => console.log(err));
  };

  const createPDF = invoice => {
    const file = {
      addressFrom: invoice.addressFrom,
      addressTo: invoice.addressTo,
      amountPaid: invoice.amountPaid,
      balanceDue: invoice.balanceDue,
      stateTo: invoice.stateTo,
      zipCodeTo: invoice.zipCodeTo,
      cityTo: invoice.cityTo,
      emailTo: invoice.emailTo,
      selectedDate: invoice.selectedDate,
      discount: invoice.discount,
      invoiceDueDate: invoice.invoiceDueDate,
      invoiceDescription:invoice.invoiceDescription,
      company:invoice.companyName,
      // invoiceItems: [
      //   { amount: "10.00", item: "BELL", quantity: "10", rate: "1.00" }
      // ],
      notes: invoice.notes,
      invoiceNumber: invoice.invoiceNumber,
      terms: invoice.terms,
      shipping: invoice.shipping,
      subtotal: invoice.subtotal,
      tax: invoice.tax,
      total: invoice.total
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

    return (
      <div className="App">
        <Navigation
          // user={userState}
          handleSignIn={signInModal}
          handleSignOut={signOut}
          loggedIn={loggedIn}
        />
        {toggleSignIn ? (
          <SignInModal
            click={signInModal}
            auth={toggleAuthModal}
          />
        ) : null}
        <section className="routes-container">
          <Route
            path="/user/:id/billing"
            component={BillingPage}
          />
          <Route
            path="/user/:id/dashboard"
            component={Dashboard}
          />
          <Route
            path="/user/:id/invoice/create"
            render={props => (
              <CreateInvoice
                {...props}
                click={createPDF}
              />
            )}
          />
          <Route
            path="/user/:id/settings"
            component={SettingsPage}
          />
          <Route
            exact
            path="/"
            render={props => (
              <LandingPage {...props} />
            )}
          />
          <Route
            path="/user/:id/invoices"
            render={props => (
              <InvoiceList
                {...props}
                click={createPDF}
              />
            )}
          />
          <Route
            path="/user/:id/invoice/:invoiceID/view"
            render={props => (
              <InvoiceView
                {...props}
              />
            )}
          />
          <Route
            path="/user/:id/invoice/:invoiceID/edit"
            render={props => (
              <EditInvoiceForm
                {...props}
                // fetchInvoices={fetchInvoices}
                // userID={useruserID}
              />
            )}
          />
        </section>
      </div>
    );
  }

export default withRouter(App);
