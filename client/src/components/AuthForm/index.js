import React from 'react';
import './AuthForm.css';
import { withRouter } from 'react-router-dom';

class AuthForm extends React.Component {
  render() {
    return (
      <section className="auth-btn-container">
        <h1>Authentication Methods</h1>
        <section className="auth-btns">
          <a
            className="auth-btn"
            href="https://2pkp3hqyc6.execute-api.us-east-1.amazonaws.com/dev/auth/facebook"
          >
            Facebook
          </a>
          <a
            className="auth-btn"
            href="https://2pkp3hqyc6.execute-api.us-east-1.amazonaws.com/dev/auth/google"
          >
            Google
          </a>
          <a
            className="auth-btn"
            href="https://2pkp3hqyc6.execute-api.us-east-1.amazonaws.com/dev/auth/stripe"
          >
            Stripe
          </a>
        </section>
      </section>
    );
  }
}

export default withRouter(AuthForm);
