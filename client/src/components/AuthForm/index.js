import React from "react";
import axios from "axios";
import Button from "../reusableComponents/Button";
import "./AuthForm.css";

class AuthForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = { tabIndex: 0 };
  }
  authenticateThirdParty = e => {
    const authName = e.target.name;
    axios.get(`http://localhost:6060/auth/${authName}`).then(res => {
      console.log(res);
    });
  };
  render() {
    return (
      <section className="auth-btn-container">
        <h1>Authentication Methods</h1>
        <Button click={this.authenticateThirdParty} name="facebook">
          Facebook
        </Button>
        <Button click={this.authenticateThirdParty} name="google">
          Google
        </Button>
        <Button click={this.authenticateThirdParty} name="stripe">
          Stripe
        </Button>
      </section>
    );
  }
}

export default AuthForm;
