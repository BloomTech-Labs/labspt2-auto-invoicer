import React, { Component } from 'react';
import { Elements, StripeProvider } from 'react-stripe-elements';
import StripeCheckoutForm from '../StripeCheckoutForm';

import Typography from '@material-ui/core/Typography';
import Slide from '@material-ui/core/Slide';

class StripeElements extends Component {
  state = { checked: false };
  componentDidMount() {
    setTimeout(() => this.setState({ checked: true }), 300);
  }
  render() {
    return (
      <StripeProvider apiKey="pk_test_aQUyLjBzj0vLD5DfVQv55rFk">
        <div>
          <Slide
            direction="down"
            in={this.state.checked}
            mountOnEnter
            unmountOnExit
          >
            <Typography style={{ fontSize: '4rem' }} variant="h3" gutterBottom>
              Purchase your plan
            </Typography>
          </Slide>
          <Elements>
            <StripeCheckoutForm />
          </Elements>
        </div>
      </StripeProvider>
    );
  }
}

export default StripeElements;
