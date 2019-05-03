import React, { useState, useContext, useEffect } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import UserContext from "../../context/UserContext";

import InvoiceCompany from "./InvoiceCompany";
import InvoiceCustomer from "./InvoiceCustomer";

// import components for Dates & General
import { Grid } from "@material-ui/core";
import DateSelecter from "../DateSelecter";
import SingleLineInput from "../SingleLineInput";
import MultiLineInput from "../MultiLineInput";

const styles = theme => ({
  layout: {
    width: "auto",
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
    [theme.breakpoints.up(600 + theme.spacing.unit * 2 * 2)]: {
      width: 600,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  paper: {
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 3,
    padding: theme.spacing.unit * 2,
    [theme.breakpoints.up(600 + theme.spacing.unit * 3 * 2)]: {
      marginTop: theme.spacing.unit * 6,
      marginBottom: theme.spacing.unit * 6,
      padding: theme.spacing.unit * 3
    }
  },
  stepper: {
    padding: `${theme.spacing.unit * 3}px 0 ${theme.spacing.unit * 5}px`
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end"
  },
  button: {
    marginTop: theme.spacing.unit * 3,
    marginLeft: theme.spacing.unit
  }
});

const CreateInvoiceStepper = props => {
  const context = useContext(UserContext);

  const [invoiceState, setInvoiceState] = useState({
    createdBy: context.user._id,
    number: "",
    description: "",
    notes: "",
    terms: "",
    date: new Date(),
    dueDate: new Date(),
    company: {
      _id: "",
      name: "",
      email: "",
      phoneNumber: "",
      address1: "",
      address2: "",
      zipCode: "",
      city: "",
      state: ""
    },
    customer: {
      _id: "",
      name: "",
      email: "",
      phoneNumber: "",
      address1: "",
      address2: "",
      zipCode: "",
      city: "",
      state: ""
    },
    items: [],
    subtotal: "",
    discount: "",
    tax: "",
    shipping: "",
    total: "",
    balance: "",
    errorText: ""
    //notes: ""
  });

  const [stepState, setStepState] = useState(0);

  const handleCompanySelect = company => {
    setInvoiceState({ ...invoiceState, company });
  };

  const handleCustomerSelect = customer => {
    setInvoiceState({ ...invoiceState, customer });
  };

  const handleDateSelect = date => {
    setInvoiceState({ ...invoiceState, date });
  };

  const handleDueDateSelect = dueDate => {
    setInvoiceState({ ...invoiceState, dueDate });
  };

  const handleInputChange = name => e => {
    setInvoiceState({ ...invoiceState, [name]: e.target.value });
  };

  const handleNext = () => {
    setStepState(prevStep => prevStep + 1);
  };

  const handleBack = () => {
    setStepState(prevStep => prevStep - 1);
  };

  const steps = [
    "Select your company",
    "Select your customer",
    "Dates",
    "Items",
    "General"
  ];

  const getStepContent = step => {
    switch (step) {
      case 0:
        return (
          <InvoiceCompany
            company={invoiceState.company}
            onCompanySelect={handleCompanySelect}
          />
        );
      case 1:
        return (
          <InvoiceCustomer
            companyId={invoiceState.company._id}
            customer={invoiceState.customer}
            onCustomerSelect={handleCustomerSelect}
          />
        );
      case 2:
        return (
          <React.Fragment>
            <DateSelecter
              label="Issue Date"
              onChangeHandler={handleDateSelect}
              value={invoiceState.date}
            />

            <DateSelecter
              label="Due Date"
              onChangeHandler={handleDueDateSelect}
              value={invoiceState.dueDate}
            />
          </React.Fragment>
        );
      case 3:
        return (
          <React.Fragment>
            <div>Invoice Items</div>
          </React.Fragment>
        );
      case 4:
        return (
          <React.Fragment>
            <Grid container spacing={16}>
              <Grid item xs={12} sm={6}>
                <SingleLineInput
                  label="Invoice Number"
                  onChangeHandler={handleInputChange("number")}
                  value={invoiceState.number}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <SingleLineInput
                  label="Invoice Description"
                  onChangeHandler={handleInputChange("description")}
                  value={invoiceState.description}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <MultiLineInput
                  label="Notes"
                  onChangeHandler={handleInputChange("notes")}
                  value={invoiceState.notes}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <MultiLineInput
                  label="Terms"
                  onChangeHandler={handleInputChange("terms")}
                  value={invoiceState.terms}
                />
              </Grid>
            </Grid>
          </React.Fragment>
        );
      default:
        return "Error";
    }
  };

  useEffect(() => {
    // temporary
    const getUser = async () => {
      await context.getUser();
    };
    getUser();
    console.log("[invoiceState in CIS]: ", invoiceState);
  }, [invoiceState]);

  const { classes } = props;

  return (
    <React.Fragment>
      <CssBaseline />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Stepper activeStep={stepState} className={classes.stepper}>
            {steps.map(label => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {stepState === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Invoice #1 generated
                </Typography>
                <Typography variant="subtitle1">
                  Your invoice has been created. [OPTIONS WITH ICONS TO SEND,
                  VIEW, ETC HERE]
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(stepState)}
                <div className={classes.buttons}>
                  {stepState !== 0 && (
                    <Button onClick={handleBack} className={classes.button}>
                      Back
                    </Button>
                  )}
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {stepState === steps.length - 1 ? "Create Invoice" : "Next"}
                  </Button>
                </div>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
      </main>
    </React.Fragment>
  );
};

export default withStyles(styles)(CreateInvoiceStepper);
