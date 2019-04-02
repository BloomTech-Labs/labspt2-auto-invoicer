import React, { Component } from "react";

import axios from "axios";

export default class InvoiceViewForm extends Component {
  constructor() {
    super();
    this.state = {
      invoice: {}
    };
  }

  componentDidMount() {
    //const id = this.props.match.params.id
    const id = "5c9c3aa1242e1a4596fa996b";
    axios
      .get(
        `http://localhost:5000/graphql?query=query%20%7B%0A%20%20invoice(invoiceID%3A%20%225c9c3aa1242e1a4596fa996b%22)%7B%0A%20%20%20%20invoiceNumber%0A%20%20%20%20amountPaid%0A%20%20%20%20_id%0A%20%20%7D%0A%7D`
      )
      .then(response => {
        this.setState({ invoice: response.data.data.invoice });
        console.log(id);
        console.log(response.data.data.invoice);
        console.log(response.data.data.invoice.amountPaid);
      })
      .catch(err => {
        console.log("Failed to get Individual Invoice", err);
      });
  }

  render() {
    console.log(this.state.invoice);
    return (
      <div>
        THIS IS INVOICE VIEW COMPONENT.
        <p>Amount Paid: {this.state.invoice.amountPaid}</p>
      </div>
    );
  }
}
