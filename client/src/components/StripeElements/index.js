import React, { Component } from 'react';
import { Elements, StripeProvider } from 'react-stripe-elements';
import StripeCheckoutForm from '../StripeCheckoutForm';

class StripeElements extends Component {
  render() {
    return (
      <StripeProvider apiKey={`${process.env.REACT_APP_STRIPE_CHECKOUT_PUBLISHABLE_KEY}`} >
        <div className="example">
          <h1>React Stripe Elements Example</h1>
          <Elements>
            <StripeCheckoutForm />
          </Elements>
        </div>
      </StripeProvider>
    );
  }
}

export default StripeElements;
