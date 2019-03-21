import React from "react";
import "./AuthForm.css";
import { withRouter } from "react-router-dom";

class AuthForm extends React.Component {
  render() {
    return (
      <section className="auth-btn-container">
        <h1>Authentication Methods</h1>
        <section className="auth-btns">
          <a className="auth-btn" href="http://localhost:6060/auth/facebook">
            Facebook
          </a>
          <a className="auth-btn" href="http://localhost:6060/auth/google">
            Google
          </a>
          <a className="auth-btn" href="http://localhost:6060/auth/stripe">
            Stripe
          </a>
        </section>
      </section>
    );
  }
}

export default withRouter(AuthForm);
