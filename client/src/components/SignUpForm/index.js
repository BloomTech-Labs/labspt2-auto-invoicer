import React from "react";

// import icons
import EmailIcon from "@material-ui/icons/Email";
import PasswordIcon from "@material-ui/icons/LockOpen";
import Password2Icon from "@material-ui/icons/Lock";
import PhoneIcon from "@material-ui/icons/Phone";
import PersonIcon from "@material-ui/icons/AccountBox";
import Person2Icon from "@material-ui/icons/AssignmentInd";

// import css here
import "./SignUpForm.css";

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      password2: "",
      phone: "",
      firstName: "",
      lastName: ""
    };
  }
  changeHandler = e => {
    return this.setState({ [e.target.name]: e.target.value });
  };
  comparePasswords = (pass1, pass2) => {
    return pass1 === pass2 ? true : false;
  };
  createLoginObject = e => {
    e.preventDefault();
    const {
      email,
      password,
      password2,
      phone,
      firstName,
      lastName
    } = this.state;
    // check if passwords match before moving forward
    if (this.comparePasswords(password, password2)) {
      if (firstName && lastName) {
        const name = `${firstName} ${lastName}`;
        const userObject = { email, password, phone, name };
        /* console.log until we have backend hooked up */
        console.log(userObject);
      } else {
        return this.setState({ error: "Valid first/last name required" });
      }
    } else {
      return this.setState({
        error: "Passwords do not match"
      });
    }
  };
  render() {
    return (
      <form className="signin-form" onSubmit={this.createLoginObject}>
        <label htmlFor="email" className="signin-form-group">
          <EmailIcon />
          <input
            className="signin-input"
            type="text"
            placeholder="email"
            name="email"
            id="email"
            onChange={this.changeHandler}
            value={this.state.email}
          />
        </label>
        <label htmlFor="firstName" className="signin-form-group">
          <PersonIcon />
          <input
            className="signin-input"
            type="text"
            placeholder="first name"
            name="firstName"
            id="firstName"
            onChange={this.changeHandler}
            value={this.state.firstName}
          />
        </label>
        <label htmlFor="lastName" className="signin-form-group">
          <Person2Icon />
          <input
            className="signin-input"
            type="text"
            placeholder="last name"
            name="lastName"
            id="lastName"
            onChange={this.changeHandler}
            value={this.state.lastName}
          />
        </label>
        <label htmlFor="phone" className="signin-form-group">
          <PhoneIcon />
          <input
            className="signin-input"
            type="text"
            placeholder="phone number"
            name="phone"
            id="phone"
            onChange={this.changeHandler}
            value={this.state.phone}
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
            onChange={this.changeHandler}
            value={this.state.password}
          />
        </label>
        <label htmlFor="password2" className="signin-form-group">
          <Password2Icon />
          <input
            className="signin-input"
            type="password"
            placeholder="password"
            name="password2"
            id="password2"
            onChange={this.changeHandler}
            value={this.state.password2}
          />
        </label>
        <button className="authentication-btns" type="submit">
          Register
        </button>
      </form>
    );
  }
}

export default SignUpForm;
