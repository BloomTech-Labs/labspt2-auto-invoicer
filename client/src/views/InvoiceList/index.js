// import packages
import React, { Component } from "react";

//import styles
import "./InvoiceList.css";

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
            <div className="invoice-box">Sample Invoice 1</div>
            <div className="invoice-box">Sample Invoice 2</div>
            <div className="invoice-box">Sample Invoice 3</div>
            <div className="invoice-box">Sample Invoice 4</div>
            <div className="invoice-box">Sample Invoice 5</div>
            <div className="invoice-box">Sample Invoice 6</div>
          </div>
        </div>
        <div className="footer">Footer</div>
      </div>
    );
  }
}
