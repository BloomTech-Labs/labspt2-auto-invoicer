import React, { Component } from 'react';
import { CardElement, injectStripe } from 'react-stripe-elements';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Slide from '@material-ui/core/Slide';

import styles from './styles';
import CardHolderName from './CardHolderName';
import SelectPurchasePlan from './SelectPurchasePlan';
import AmountCredits from './AmountCredits';
import SelectCurrency from './SelectCurrency';
import SelectCompany from './SelectCompany';
import { BuyPlanOrCredits } from '../../graphQL/mutations/companies';
import { UserConsumer } from './../../contexts/UserContext';

class StripeCheckoutForm extends Component {
  state = {
    complete: false,
    company: '',
    companyID: '',
    unlimited: false,
    currency: 'USD',
    name: '',
    quantity: 0,
    checked: false
  };

  componentDidMount() {
    setTimeout(() => this.setState({ checked: true }), 700);
  }

  companyHelper = companies => {
    let company = companies.filter(
      company => company.name === this.state.company
    );
    this.setState({ companyID: company._id });
  };

  onChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  onSubmit = async e => {
    e.preventDefault();
    let { name, currency, quantity } = this.state;
    if (this.state.unlimited) {
      quantity = 0;
    }
    const { token } = await this.props.stripe.createToken({ name });
    const response = await fetch(
      'https://api.myautoinvoicer.com/stripe/charge',
      {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain' },
        body: JSON.stringify({
          stripeToken: token.id,
          quantity,
          currency
        })
      }
    );
    if (response.ok) {
      const result = await BuyPlanOrCredits(
        this.state.companyID,
        quantity,
        'name unlimited_tier credits'
      );
    }
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
    return (
      <UserConsumer>
        {({ userState: { companies } }) => {
          // this.companyHelper(companies);
          return (
            <Slide
              direction="right"
              in={this.state.checked}
              mountOnEnter
              unmountOnExit
            >
              <Paper elevation={4} className={classes.paper}>
                <form
                  className={classes.container}
                  noValidate
                  autoComplete="off"
                >
                  <CardHolderName
                    onChangeHandler={this.onChange}
                    value={this.state.name}
                  />
                  <SelectCompany
                    onChangeHandler={this.onChange}
                    value={this.state.company}
                    companies={companies}
                  />
                  <SelectPurchasePlan
                    onChangeHandler={this.onChange}
                    value={this.state.unlimited}
                  />
                  <AmountCredits
                    onChangeHandler={this.onChange}
                    value={this.state.quantity}
                    disabled={this.state.unlimited}
                  />
                  <SelectCurrency
                    onChangeHandler={this.onChange}
                    value={this.state.currency}
                  />
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
        }}
      </UserConsumer>
    );
  }
}

export default injectStripe(withStyles(styles)(StripeCheckoutForm));
