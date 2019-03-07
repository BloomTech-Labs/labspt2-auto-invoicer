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

  submitHandler = fields => {
    this.setState({ fields });
    console.log("CreateInvoice Item Details: ", fields);
  };

  render() {
    return (
      <div className="main-container">
        {" "}
        <div className="top-nav">
          <div className="top-nav-left">
            <ul className="breadcrumb">
              <li>
                <p>Home</p>
              </li>
              <li>
                <p>Invoices</p>
              </li>
              <li>
                <p>New</p>
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
              <InvoiceItemTable
                onSubmit2={fields => this.submitHandler(fields)}
              />
              <p>{JSON.stringify(this.state.fields)}</p>
            </div>
          </div>
        </div>
        <div className="footer">Footer</div>
      </div>
    );
  }
}
