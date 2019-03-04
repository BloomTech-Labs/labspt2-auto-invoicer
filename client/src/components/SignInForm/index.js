import React from "react";

// import icons
import EmailIcon from "@material-ui/icons/Email";
import PasswordIcon from "@material-ui/icons/LockOpen";
// import css here
import "./SignInForm.css";

class SignInForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }
  render() {
    return (
      <form className="signin-form">
        <label htmlFor="email" className="signin-form-group">
          <EmailIcon />
          <input
            className="signin-input"
            type="text"
            placeholder="email"
            name="email"
            id="email"
          />
        </label>
        <label htmlFor="password" className="signin-form-group">
          <PasswordIcon />
          <input
            className="signin-input"
            type="password"
            placeholder="password"
            name="password"
            id="password"
          />
        </label>
      </form>
    );
  }
}

export default SignInForm;
