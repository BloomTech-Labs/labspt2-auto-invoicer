// import packages
import React, { Component } from "react";

//import styles
import "./CreateInvoice.css";

//import components
import AddressForm from "../../components/reusableComponents/AddressForm";
//import InvoiceItemTable from "../../components/reusableComponents/InvoiceItemTable";
import AddCircle from "@material-ui/icons/AddCircle";
////
import SampleTable from "../../components/reusableComponents/SampleTable";

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
                Add Your Company Logo: <AddCircle />
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
              {/* <InvoiceItemTable /> */}
              <SampleTable />
            </div>
          </div>
        </div>
        <div className="footer">Footer</div>
      </div>
    );
  }
}

// Add functionality to form
// submit handler, save responses to local state
