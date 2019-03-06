// import packages
import React, { Component } from "react";

//import styles
import "./InvoiceList.css";

//import components/CreateInvoiceButton";
import Invoices from "../../components/Invoices";

export default class index extends Component {
  render() {
    return (
      <section className="invoice-list-container">
        <h1>Invoices</h1>
        <Invoices />
      </section>
    );
  }
}
