import React, { Component, Fragment } from "react";
import { withStyles, Button } from "@material-ui/core";
import styles from "./styles";

// import components
import Total from "../CreateInvoiceForm2/Total";
import AmountPaid from "../CreateInvoiceForm2/AmountPaid";
import BalanceDue from "../CreateInvoiceForm2/BalanceDue";

export default withStyles(styles)(
  class extends Component {
    state = {};
    //import data into Invoice Data into Form
    render() {
      return (
        <Fragment>
          <form>
            <Total
              //onChangeHandler={this.handleInputChange("total")}
              value={this.state.total}
              // error={
              //   this.state.total.length === 0 ? !!this.state.errorText : false
              // }
              // helperText={
              //   this.state.total ? !!this.state.errorText : this.state.errorText
              // }
            />
            <AmountPaid
              //onChangeHandler={this.handleInputChange("amountPaid")}
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
              //onChangeHandler={this.handleInputChange("balanceDue")}
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
            //onClick={this.handleFormSubmit}
            variant="contained"
            style={{ background: "#4fc878" }}
            //color="primary"
          >
            Edit
          </Button>
        </Fragment>
      );
    }
  }
);
