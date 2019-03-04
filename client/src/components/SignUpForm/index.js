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
<<<<<<< HEAD
  createRegisterObject = e => {
=======
  createLoginObject = e => {
>>>>>>> added basics of signup form and icons to match
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
<<<<<<< HEAD
      <form className="signup-form" onSubmit={this.createRegisterObject}>
        <label htmlFor="email" className="signup-form-group">
          <EmailIcon className="signup-icon" />
=======
      <form className="signin-form" onSubmit={this.createLoginObject}>
        <label htmlFor="email" className="signin-form-group">
          <EmailIcon />
>>>>>>> added basics of signup form and icons to match
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
<<<<<<< HEAD
        <label htmlFor="firstName" className="signup-form-group">
          <PersonIcon className="signup-icon" />
=======
        <label htmlFor="firstName" className="signin-form-group">
          <PersonIcon />
>>>>>>> added basics of signup form and icons to match
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
<<<<<<< HEAD
        <label htmlFor="lastName" className="signup-form-group">
          <Person2Icon className="signup-icon" />
=======
        <label htmlFor="lastName" className="signin-form-group">
          <Person2Icon />
>>>>>>> added basics of signup form and icons to match
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
<<<<<<< HEAD
        <label htmlFor="phone" className="signup-form-group">
          <PhoneIcon className="signup-icon" />
=======
        <label htmlFor="phone" className="signin-form-group">
          <PhoneIcon />
>>>>>>> added basics of signup form and icons to match
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
<<<<<<< HEAD
        <label htmlFor="password" className="signup-form-group">
          <PasswordIcon className="signup-icon" />
=======
        <label htmlFor="password" className="signin-form-group">
          <PasswordIcon />
>>>>>>> added basics of signup form and icons to match
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
<<<<<<< HEAD
        <label htmlFor="password2" className="signup-form-group">
          <Password2Icon className="signup-icon" />
=======
        <label htmlFor="password2" className="signin-form-group">
          <Password2Icon />
>>>>>>> added basics of signup form and icons to match
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
<<<<<<< HEAD
        <button className="authentication-btns register-btn" type="submit">
=======
        <button className="authentication-btns" type="submit">
>>>>>>> added basics of signup form and icons to match
          Register
        </button>
      </form>
    );
  }
}

export default SignUpForm;
