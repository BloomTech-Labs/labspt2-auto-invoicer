// import packages
import React, { Component } from "react";

//import styles
import "./CreateInvoice.css";

//import components
import CreateInvoiceForm from "../../components/CreateInvoiceForm";
import GoogleCalApi from "../../components/GoogleCalApi";

export default class index extends Component {
  //No state held - views only render
  render() {
    return (
      <div>
        <CreateInvoiceForm click={this.props.click} />
        <GoogleCalApi />
      </div>
    );
  }
}
