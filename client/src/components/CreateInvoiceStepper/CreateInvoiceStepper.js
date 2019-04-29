import React, { useState, useContext, useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Step from '@material-ui/core/Step';
import StepContent from '@material-ui/core/StepContent';
import StepLabel from '@material-ui/core/StepLabel';
import Stepper from '@material-ui/core/Stepper';
import Typography from '@material-ui/core/Typography';

import UserContext from '../../context/UserContext';

import InvoiceCompany from '../InvoiceCompany';

const styles = theme => ({
  root: {
    width: '95%'
  },
  button: {
    marginTop: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  actionsContainer: {
    marginBottom: theme.spacing.unit * 2
  },
  resetContainer: {
    padding: theme.spacing.unit * 3
  }
});

const CreateInvoiceStepper = props => {
  const context = useContext(UserContext);

  const [invoiceState, setInvoiceState] = useState({
    createdBy: context.user._id,
    number: '',
    description: '',
    terms: '',
    date: '',
    dueDate: '',
    company: {
      _id: '',
      name: '',
      email: '',
      phoneNumber: '',
      address1: '',
      address2: '',
      zipCode: '',
      city: '',
      state: ''
    },
    customer: {
      _id: '',
      name: '',
      email: '',
      phoneNumber: '',
      address1: '',
      address2: '',
      zipCode: '',
      city: '',
      state: ''
    },
    items: [],
    subtotal: '',
    discount: '',
    tax: '',
    shipping: '',
    total: '',
    balance: '',
    notes: ''
  });

  const [stepState, setStepState] = useState(0);

  const handleCompanySelect = company => {
    setInvoiceState({ ...invoiceState, company });
  };

  const handleNext = () => {
    setStepState(prevStep => prevStep + 1);
  };

  const handleBack = () => {
    setStepState(prevStep => prevStep - 1);
  };

  const handleReset = () => {
    setStepState(0);
  };

  const getSteps = () => {
    return [
      'Select your company',
      'Select your customer',
      'Due Date, Terms and Notes'
    ];
  };

  const getStepContent = step => {
    switch (step) {
      case 0:
        return (
          <React.Fragment>
            <div>
              Your customer will be invoiced from this company. You can select
              your company or create a new company here.
            </div>
            <InvoiceCompany
              company={invoiceState.company}
              onCompanySelect={handleCompanySelect}
            />
          </React.Fragment>
        );
      case 1:
        return (
          <React.Fragment>
            <div>
              You can select your customer or create a new customer here.
            </div>
          </React.Fragment>
        );
      case 2:
        return (
          <React.Fragment>
            <div>Insert text for remaining steps.</div>
          </React.Fragment>
        );
      default:
        return 'Error';
    }
  };

  useEffect(() => {
    // temporary
    const getUser = async () => {
      await context.getUser();
    };
    getUser();
    console.log('[invoiceState in CIS]: ', invoiceState);
  }, [invoiceState]);

  const steps = getSteps();
  const { classes } = props;

  return (
    <React.Fragment>
      <div className={classes.root}>
        <Stepper activeStep={stepState} orientation="vertical">
          {steps.map((label, index) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
              <StepContent>
                <Typography>{getStepContent(index)}</Typography>
                <div className={classes.actionsContainer}>
                  <div>
                    <Button
                      disabled={stepState === 0}
                      onClick={handleBack}
                      className={classes.button}
                    >
                      Back
                    </Button>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleNext}
                      className={classes.button}
                    >
                      {stepState === steps.length - 1 ? 'Finish' : 'Next'}
                    </Button>
                  </div>
                </div>
              </StepContent>
            </Step>
          ))}
        </Stepper>
        {stepState === steps.length && (
          <Paper square elevation={0} className={classes.resetContainer}>
            <Typography>All steps completed - you&apos;re finished</Typography>
            <Button onClick={handleReset} className={classes.button}>
              Reset
            </Button>
          </Paper>
        )}
      </div>
    </React.Fragment>
  );
};

export default withStyles(styles)(CreateInvoiceStepper);
