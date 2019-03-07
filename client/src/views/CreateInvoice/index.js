// import packages
import React, { Component } from "react";

//import styles
import "./CreateInvoice.css";

//import components
import AddressForm from "../../components/reusableComponents/AddressForm";
import InvoiceItemTable from "../../components/reusableComponents/InvoiceItemTable";
import AddCircle from "@material-ui/icons/AddCircle";
////

export default class index extends Component {
  constructor() {
    super();
    this.state = {
      fields: {}
    };
  }

  onSubmit = fields => {
    this.setState({ fields });
    console.log("CreateInvoice Page: ", fields);
  };

  render() {
    return (
      <div className="main-container">
        {" "}
        <div className="top-nav" />
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
              <AddressForm onSubmit={fields => this.onSubmit(fields)} />
              <p>{JSON.stringify(this.state.fields)}</p>
            </div>

            <div className="item-details">
              <InvoiceItemTable onSubmit={fields => this.onSubmit(fields)} />
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
