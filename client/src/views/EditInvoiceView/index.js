import React, { Component } from "react";

//import styles

//import components
import EditInvoiceForm from "../../components/EditInvoiceForm";

export default class index extends Component {
  // No state held - views only render

  render() {
    return (
      <div>
        Edit Invoice Views Only.
        <EditInvoiceForm />
      </div>
    );
  }
}
