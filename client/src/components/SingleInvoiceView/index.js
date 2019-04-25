import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";

import { CompanyConsumer } from "../../contexts/CompanyContext";
export default class SingleInvoiceView extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <CompanyConsumer>
        {({ companyState }) => {
          const { invoiceID } = this.props.props.match.params;
          const invoice = companyState.invoices.find(
            invoice => `${invoice._id}` === invoiceID
          );
          return (
            <section>
              }
              <Paper style={{ height: 500 }}>
                <div>test{invoice.userName}</div>
                <div>test{invoice.total}</div>
                <div>test{invoice.subtotal}</div>
                <div>test{invoice.amountPaid}</div>
              </Paper>
            </section>
          );
        }}
      </CompanyConsumer>
    );
  }
}
