// import packages
import React, { Component } from "react";

//import styles
import "./CreateInvoice.css";

//import components
import AddressForm from "../../components/reusableComponents/AddressForm";
import InvoiceItemTable from "../../components/reusableComponents/InvoiceItemTable";
//import AddIconButton from "../../components/reusableComponents/AddIconButton";
//import AddIcon from "@material-ui/icons/Add";
import AddCircle from "@material-ui/icons/AddCircle";

export default class index extends Component {
  render() {
    return (
      <div className="main-container">
        {" "}
        <div className="top-nav">
          <div className="top-nav-left">
            <ul className="breadcrumb">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Invoices</a>
              </li>
              <li>
                <a href="#">New</a>
              </li>
            </ul>
          </div>

          <div className="top-nav-right">
            <div className="credits">Credits: 3</div>
            <div className="signout-button">Sign Out</div>
          </div>
        </div>
        <div className="mid-container">
          <div className="sidebar-nav">
            <div className="sidebar-nav-button">Invoice</div>
            <div className="sidebar-nav-button">Billing</div>
            <div className="sidebar-nav-button">Settings</div>
          </div>
          <div className="invoice-list-container">
            <div className="invoice-details">
              <div className="invoice-logo">
                Add Your Logo: <AddCircle />
              </div>
              <div className="invoice-number-container">
                <div className="invoice-number-item">Invoice Number</div>
                <div className="invoice-number-item">Date</div>
                <div className="invoice-number-item">Due Date</div>
                <div className="invoice-number-item">Balance Due: $0.00</div>
              </div>
            </div>
            <div className="invoice-address">
              <AddressForm />
            </div>

            <div className="item-details">
              <InvoiceItemTable />
            </div>
          </div>
        </div>
        <div className="footer">Footer</div>
      </div>
    );
  }
}

// Add Your Logo Button as reusable component - Floating Action Button ?
//// Floating Action Button in github https://github.com/mui-org/material-ui/blob/master/docs/src/pages/demos/buttons/FloatingActionButtons.js

// Add functionality to form
// submit handler, save responses to local state

// Been reading documentation
// may need to delete node_modules and re-install?
