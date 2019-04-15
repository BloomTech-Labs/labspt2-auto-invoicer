// import packages
import React, { Component } from "react";

//import styles
import "./InvoiceList.css";

//import components/CreateInvoiceButton";
import Invoices from "../../components/Invoices";

export default class index extends Component {

  render() {
    console.log(this.props,"ii")
    return (
      <section className="invoice-list-container">
        <Invoices createPDF={this.props.click} />
      </section>
    );
  }
}
