import React, { Component, Fragment } from "react";
import { withStyles, Button } from "@material-ui/core";
import styles from "./styles";

// import components
import Total from "../CreateInvoiceForm2/Total";
import AmountPaid from "../CreateInvoiceForm2/AmountPaid";
import BalanceDue from "../CreateInvoiceForm2/BalanceDue";

import {
  EditAmountPaid,
  EditTotal,
  EditBalanceDue,
  EditInvoice
} from "../../graphQL/mutations/invoices";

export default withStyles(styles)(
  class extends Component {
    state = {
      invoice: this.props.invoice,
      total: this.props.invoice.total,
      amountPaid: this.props.invoice.amountPaid,
      balanceDue: this.props.invoice.balanceDue
    };
    //import data into Invoice Data into Form

    // async componentDidMount() {
    //   try {
    //     const returnedData = `
    //     _id
    //     companyName
    //     userName
    //     invoiceNumber
    //     invoiceDescription
    //     selectedDate
    //     invoiceDueDate
    //     company
    //     zipCodeTo
    //     addressTo
    //     cityTo
    //     stateTo
    //     emailTo
    //     subtotal
    //     discount
    //     tax
    //     shipping
    //     total
    //     amountPaid
    //     balanceDue
    //     notes
    //     terms
    //     item
    //     quantity
    //     rate
    //     amount
    //     `;
    //     const { invoiceID } = this.props.id;
    //     const invoice = await FetchInvoice(invoiceID, returnedData);
    //     this.setState({
    //       ...invoice,
    //       total: invoice.total,
    //       amountPaid: invoice.amountPaid,
    //       balanceDue: invoice.balanceDue
    //     });
    //   } catch (error) {
    //     throw error;
    //   }
    // }

    handleFormSubmit = async e => {
      e.preventDefault();
      await EditAmountPaid(
        this.state.invoice._id,
        this.state.amountPaid,
        "amountPaid"
      );
      await EditTotal(this.state.invoice._id, this.state.total, "total");
      await EditBalanceDue(
        this.state.invoice._id,
        this.state.balanceDue,
        "balanceDue"
      );
      await this.props.fetchInvoices();
    };

    handleTotalChange = e => {
      this.setState({ total: e.target.value });
    };

    handleAmountPaidChange = e => {
      this.setState({ amountPaid: e.target.value });
    };

    handleBalanceDueChange = e => {
      this.setState({ balanceDue: e.target.value });
    };

    render() {
      return (
        <Fragment>
          <form>
            <Total
              onChangeHandler={this.handleTotalChange}
              value={this.state.total}
              // error={
              //   this.state.total.length === 0 ? !!this.state.errorText : false
              // }
              // helperText={
              //   this.state.total ? !!this.state.errorText : this.state.errorText
              // }
            />
            <AmountPaid
              onChangeHandler={this.handleAmountPaidChange}
              value={this.state.amountPaid}
              // error={
              //   this.state.amountPaid.length === 0
              //     ? !!this.state.errorText
              //     : false
              // }
              // helperText={
              //   this.state.amountPaid
              //     ? !!this.state.errorText
              //     : this.state.errorText
              // }
            />
            <BalanceDue
              onChangeHandler={this.handleBalanceDueChange}
              value={this.state.balanceDue}
              // error={
              //   this.state.balanceDue.length === 0
              //     ? !!this.state.errorText
              //     : false
              // }
              // helperText={
              //   this.state.balanceDue
              //     ? !!this.state.errorText
              //     : this.state.errorText
              // }
            />
          </form>
          <Button
            onClick={this.handleFormSubmit}
            variant="contained"
            style={{ background: "#4fc878", width: 100 }}
            //color="primary"
          >
            Edit
          </Button>

          <Button
            //onClick={this.handleFormSubmit}
            variant="contained"
            style={{ background: "#ff8080", width: 100, marginLeft: 10 }}
            //color="primary"
          >
            Cancel
          </Button>
        </Fragment>
      );
    }
  }
);
