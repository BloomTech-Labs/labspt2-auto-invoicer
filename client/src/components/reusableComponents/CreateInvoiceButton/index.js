// import packages
import React, { Component } from "react";

// import styles
import "./CreateInvoiceButton.css";

class CreateInvoiceButton extends Component {
  render() {
    return (
      <div>
        <h1 className="create-invoice-button">New Invoice Button +</h1>
        <span className="invoice-button-circle" />
      </div>
    );
  }
}

export default CreateInvoiceButton;
