import React, { Component } from 'react';
import { CardElement, injectStripe } from 'react-stripe-elements';

import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 250
  },
  dense: {
    marginTop: 19
  },
  menu: {
    width: 250
  },
  card: {
    width: '25%'
  },
  button: {
    margin: theme.spacing.unit,
    width: '20%'
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
      quantity: 0
    };
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
    const price = this.state.unlimited ? 9.99 : this.state.quantity * 0.99;
    if (this.state.complete) return <h1>Purchase Complete</h1>;
    return (
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="standard-with-placeholder"
          label="Card Holder's Name"
          placeholder="Enter your name"
          className={classes.textField}
          margin="normal"
          name="name"
          value={this.state.name}
          onChange={this.onChange}
        />
        <TextField
          id="standard-select-currency"
          select
          label="Select"
          name="unlimited"
          className={classes.textField}
          value={this.state.unlimited}
          onChange={this.onChange}
          SelectProps={{
            MenuProps: {
              className: classes.menu
            }
          }}
          helperText="Please select your Plan"
          margin="normal"
        >
          <MenuItem value={false}>Credits</MenuItem>
          <MenuItem value={true}>1 Month Unlimited</MenuItem>
        </TextField>
        <TextField
          id="standard-number"
          label="Number"
          name="quantity"
          disabled={this.state.unlimited}
          value={this.state.quantity}
          onChange={this.onChange}
          className={classes.textField}
          InputLabelProps={{
            shrink: true
          }}
          margin="normal"
        />
        <TextField
          id="standard-select-currency"
          select
          label="Select"
          name="currency"
          className={classes.textField}
          value={this.state.currency}
          onChange={this.onChange}
          SelectProps={{
            MenuProps: {
              className: classes.menu
            }
          }}
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
    );
  }
}

export default injectStripe(withStyles(styles)(StripeCheckoutForm));
