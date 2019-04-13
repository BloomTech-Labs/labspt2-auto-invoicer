import React, { Component } from "react";
import { Paper, Grid, Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

import styles from "./styles";
import styled from "styled-components";

import InvoiceNumberInput from "./InvoiceNumberInput";
import DateIssue from "./DateIssue";
import DueDate from "./DueDate";
import InvoiceDescription from "./InvoiceDescription";
import UploadLogo from "./UploadLogo";
import BillTo from "./BillTo";
import InvoiceItemInput from "./InvoiceItemInput";
import InvoiceItemTableHead from "./InvoiceItemTableHead";
import InvoiceBalance from "./InvoiceBalance";
import InvoiceNotesTerms from "./InvoiceNotesTerms";

const StyledSection = styled.section`
  display: flex;
  buttonjustify-content: space-between;
  padding-top: 10px;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 20px;
  border-bottom: 1px solid lightgray;
  height: 125px;
`;

const StyledAddress = styled.section`
  padding-top: 10px;
  padding-left: 10px;
  height: 475px;
`;

const StyledInvoiceItem = styled.section`
  padding-top: 25px;
  padding-bottom: 20px;
  border-bottom: 1px solid lightgray;
  height: auto;
`;

const StyledInvoiceBalance = styled.section`
  padding-top: 25px;

  display: flex;
  justify-content: space-around;
`;

class CreateInvoiceForm2 extends Component {
  constructor() {
    super();
    this.state = {
      invoiceItems: [{ item: "", quantity: "", rate: "", amount: "" }]
    };
  }

  addInvoiceItem = e => {
    e.preventDefault();
    this.setState(prevState => ({
      invoiceItems: [
        ...prevState.invoiceItems,
        { item: "", quantity: "", rate: "", amount: "" }
      ]
    }));
  };

  render() {
    const { classes } = this.props;
    return (
      <Grid container spacing={12}>
        <Paper className={classes.paper}>
          <form className={classes.container}>
            <StyledSection>
              <Grid item xs={6}>
                <InvoiceNumberInput />
              </Grid>
              <Grid item xs={6}>
                <DateIssue />
              </Grid>
              <Grid item xs={3}>
                <DueDate />
              </Grid>
            </StyledSection>
            <StyledSection>
              <Grid item xs={9}>
                <InvoiceDescription />
              </Grid>
              <Grid item xs={3}>
                <UploadLogo />
              </Grid>
            </StyledSection>
            <StyledAddress>
              <Grid item xs={4}>
                <BillTo />
              </Grid>
            </StyledAddress>
            <StyledInvoiceItem>
              <Grid item xs={12}>
                <form
                  onSubmit={this.handleFormSubmit}
                  onChange={this.handleInvoiceItemsInputChange}
                >
                  <InvoiceItemTableHead />
                  <InvoiceItemInput invoiceItems={this.state.invoiceItems} />
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={this.addInvoiceItem}
                  >
                    Add Line Item +
                  </Button>
                </form>
              </Grid>
            </StyledInvoiceItem>
            <StyledInvoiceBalance>
              <Grid item xs={4}>
                <InvoiceNotesTerms />
              </Grid>
              <Grid item xs={4}>
                <InvoiceBalance />
              </Grid>
            </StyledInvoiceBalance>
          </form>
          <Button variant="contained" color="primary">
            Generate
          </Button>
        </Paper>
      </Grid>
    );
  }
}

export default withStyles(styles)(CreateInvoiceForm2);
