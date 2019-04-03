import React, { Component } from "react";

//import styles
//import "./InvoiceView.css";

//import components
import InvoiceViewForm from "../../components/InvoiceViewForm";

export default class index extends Component {
  // No state held - views only render
  render() {
    return (
      <div>
        InvoiceViews Only.
        <InvoiceViewForm />
      </div>
    );
  }
}
