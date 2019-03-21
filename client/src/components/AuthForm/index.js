import React from "react";
import "./AuthForm.css";
import { withRouter } from "react-router-dom";

class AuthForm extends React.Component {
  render() {
    return (
      <section className="auth-btn-container">
        <h1>Authentication Methods</h1>
        <a href="http://localhost:6060/auth/facebook">Facebook</a>
        <a href="http://localhost:6060/auth/google">Google</a>
        <a href="http://localhost:6060/auth/stripe">Stripe</a>
      </section>
    );
  }
}

export default withRouter(AuthForm);
