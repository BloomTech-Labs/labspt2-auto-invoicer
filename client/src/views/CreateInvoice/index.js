// import packages
import React, { Component } from "react";

//import styles
import "./CreateInvoice.css";

//import components
//import CreateInvoiceButton from "../../components/reusableComponents/CreateInvoiceButton";

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
            <div className="invoice-details">Invoice Details</div>
            <div className="item-details">Item Details</div>
          </div>
        </div>
        <div className="footer">Footer</div>
      </div>
    );
  }
}
