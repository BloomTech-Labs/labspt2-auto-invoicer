import React, { Component } from 'react';
import { CardElement, injectStripe } from 'react-stripe-elements';

import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Slide from '@material-ui/core/Slide';

const styles = theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: '90%',
    fontSize: '1.5rem'
  },
  dense: {
    marginTop: 19
  },
  menu: {
    width: '90%',
    fontSize: '1.5rem'
  },
  card: {
    width: '90%',
    marginTop: 15
  },
  button: {
    margin: theme.spacing.unit,
    width: '90%',
    alignSelf: 'center',
    height: 40,
    marginTop: 20,
    fontSize: 18
  },
  label: {
    fontSize: '1.5rem'
  },
  helperText: {
    fontSize: '1.2rem'
  },
  paper: {
    zIndex: 1,
    position: 'relative',
    margin: theme.spacing.unit,
    padding: theme.spacing.unit
  }
});

const currencies = [
  {
    value: 'USD',
    label: '$'
  },
  {
    value: 'EUR',
    label: '€'
  },
  {
    value: 'BTC',
    label: '฿'
  },
  {
    value: 'JPY',
    label: '¥'
  }
];

class StripeCheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      complete: false,
      unlimited: false,
      currency: 'USD',
      name: '',
      quantity: 0,
      checked: false
    };
  }

  componentDidMount() {
    setTimeout(() => this.setState({ checked: true }), 700);
  }

  onChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  onSubmit = async e => {
    e.preventDefault();
    const { name, currency, quantity } = this.state;
    const { token } = await this.props.stripe.createToken({ name });
    const response = await fetch('http://localhost:6060/stripe/charge', {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain' },
      body: JSON.stringify({
        stripeToken: token.id,
        quantity,
        currency
      })
    });
    console.log(response);
    if (response.ok) console.log('Purchase Complete!');
    this.setState({
      unlimited: false,
      currency: 'USD',
      name: '',
      quantity: 0
    });
  };

  render() {
    const { classes } = this.props;
    const { checked } = this.state;
    const price = this.state.unlimited ? 9.99 : this.state.quantity * 0.99;
    return (
      <Slide direction="up" in={checked} mountOnEnter unmountOnExit>
        <Paper elevation={4} className={classes.paper}>
          <form className={classes.container} noValidate autoComplete="off">
            <TextField
              InputProps={{
                inputProps: {
                  className: classes.textField
                }
              }}
              InputLabelProps={{
                className: classes.label
              }}
              id="standard-with-placeholder"
              style={{ fontSize: '2rem' }}
              label="Card Holder's Name"
              placeholder="Enter your name"
              className={classes.textField}
              margin="normal"
              name="name"
              value={this.state.name}
              onChange={this.onChange}
            />
            <TextField
              InputProps={{
                inputProps: {
                  className: classes.textField
                }
              }}
              InputLabelProps={{
                className: classes.label
              }}
              select
              label="Choose a plan"
              name="unlimited"
              className={classes.textField}
              value={this.state.unlimited}
              onChange={this.onChange}
              SelectProps={{
                MenuProps: {
                  className: classes.menu
                }
              }}
              FormHelperTextProps={{ className: classes.helperText }}
              helperText="Please select your Plan"
              margin="normal"
            >
              <MenuItem value={false}>Credits</MenuItem>
              <MenuItem value={true}>1 Month Unlimited</MenuItem>
            </TextField>
            <TextField
              InputProps={{
                inputProps: {
                  className: classes.textField
                }
              }}
              InputLabelProps={{
                className: classes.label
              }}
              id="standard-number"
              label="How many credits do you want?"
              name="quantity"
              disabled={this.state.unlimited}
              value={this.state.quantity}
              onChange={this.onChange}
              className={classes.textField}
              InputLabelProps={{
                className: classes.label
              }}
              margin="normal"
            />
            <TextField
              InputProps={{
                inputProps: {
                  className: classes.textField
                }
              }}
              InputLabelProps={{
                className: classes.label
              }}
              id="standard-select-currency"
              select
              label="Currency"
              name="currency"
              className={classes.textField}
              value={this.state.currency}
              onChange={this.onChange}
              SelectProps={{
                MenuProps: {
                  className: classes.menu
                }
              }}
              FormHelperTextProps={{ className: classes.helperText }}
              helperText="Please select your currency"
              margin="normal"
            >
              {currencies.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <CardElement className={classes.card} />
            <Button
              onClick={this.onSubmit}
              variant="contained"
              color="secondary"
              className={classes.button}
            >
              {`Pay ${price}`}
            </Button>
          </form>
        </Paper>
      </Slide>
    );
  }
}

export default injectStripe(withStyles(styles)(StripeCheckoutForm));
