import React from "react";

// import components here
import Button from "../reusableComponents/Button";

// import css here
import "./SettingsForm.css";

class SettingsForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "testing@gmail.com",
      name: "john doe",
      phone: "6789995566"
    };
  }
  changeHandler = e => {
    return this.setState({ [e.target.name]: e.target.value });
  };
  newPasswordSubmit = e => {
    e.preventDefault();
    const { newPassword, confirmPassword } = this.state;
    // change alerts when we start adding redux and axios calls
    newPassword === confirmPassword && newPassword.length > 7
      ? alert("Password Changed")
      : alert("Passwords do not match or invalid");
  };
  render() {
    const { name, email, phone } = this.state;
    return (
      <form className="form-column" onSubmit={this.newPasswordSubmit}>
        <label forhtml="name">
          Name
          <input
            type="text"
            name="name"
            onChange={this.changeHandler}
            value={name}
            placeholder="name"
          />
        </label>
        <label forhtml="email">
          Email
          <input
            type="text"
            name="email"
            onChange={this.changeHandler}
            value={email}
            placeholder="email"
          />
        </label>
        <label forhtml="companyCity">
          Phone
          <input
            type="text"
            name="phone"
            onChange={this.changeHandler}
            value={phone}
            placeholder="phone"
            pattern="[0-9]{10}"
            maxlength="10"
          />
        </label>
        <Button>Save</Button>
      </form>
    );
  }
}

export default SettingsForm;
