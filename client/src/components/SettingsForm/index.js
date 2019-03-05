import React from "react";

// import components here
import NewSettingsInfo from "../NewSettingsInfo";

// import css here
import "./SettingsForm.css";

class SettingsForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      oldPassword: "",
      newPassword: "",
      confirmPassword: ""
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
    const settingsInfo = Object.create(this.state);
    return (
      <form className="settings_form" onSubmit={this.newPasswordSubmit}>
        <NewSettingsInfo
          settingsInfo={settingsInfo}
          changeHandler={this.changeHandler}
        />
      </form>
    );
  }
}

export default SettingsForm;
