import React from "react";
// import css here
import "./NewSettingsInfo.css";
import Button from "../reusableComponents/Button"
const NewSettingsInfo = props => {
  const {
    email,
    oldPassword,
    newPassword,
    confirmPassword
  } = props.settingsInfo;
  const { changeHandler } = props;
  return (
    <fieldset className="settings_info">
      <input
        type="email"
        onChange={changeHandler}
        name="email"
        value={email}
        placeholder="Email Address"
      />
      <input
        type="password"
        onChange={changeHandler}
        name="oldPassword"
        value={oldPassword}
        placeholder="Old Password"
      />
      <input
        type="password"
        onChange={changeHandler}
        name="newPassword"
        value={newPassword}
        placeholder="New Password"
      />
      <input
        type="password"
        onChange={changeHandler}
        name="confirmPassword"
        value={confirmPassword}
        placeholder="Confirm Password"
      />
      <Button>save</Button>
      <p>Password must contain at least 8 charachters</p>
    </fieldset>
  );
};

export default NewSettingsInfo;
