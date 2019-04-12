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
