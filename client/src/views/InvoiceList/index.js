// import packages
import React, { Component } from "react";

//import styles
import "./InvoiceList.css";

//import components/CreateInvoiceButton";
import Invoices from "../../components/Invoices";

export default class index extends Component {
  constructor(props) {
    super(props)
      props.fetchUser("5c8d88c17fef7140f485950f")
      props.fetchCompany("5c8d9319b548bf03b82a047c")
    
  }

  render() {
    const {name} = this.props.user;
  
    return (
      <section className="invoice-list-container">
        <h1>Hello {name} here are your Invoices</h1>
        <Invoices id={this.props.id} />
      </section>
    );
  }
}
