import React, { Component } from "react";
import { Paper, Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

import styles from "./styles";
import styled from "styled-components";

import InvoiceNumberInput from "./InvoiceNumberInput";
import DateIssue from "./DateIssue";
import DueDate from "./DueDate";
import InvoiceDescription from "./InvoiceDescription";
import UploadLogo from "./UploadLogo";
import BillTo from "./BillTo";
import InvoiceItemTable from "./InvoiceItemTable";

const StyledSection = styled.section`
  display: flex;
  justify-content: space-between;
  padding-top: 10px;
  padding-bottom: 20px;
  border-bottom: 1px solid lightgray;
`;

class CreateInvoiceForm2 extends Component {
  constructor() {
    super();
    this.state = {};
  }

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
              <Grid item xs={6}>
                <InvoiceDescription />
              </Grid>
              <Grid item xs={6}>
                <UploadLogo />
              </Grid>
            </StyledSection>
            <StyledSection>
              <Grid item xs={6}>
                <BillTo />
              </Grid>
            </StyledSection>
            <StyledSection>
              <Grid item xs={12}>
                <InvoiceItemTable />
              </Grid>
            </StyledSection>
          </form>
        </Paper>
      </Grid>
    );
  }
}

export default withStyles(styles)(CreateInvoiceForm2);
