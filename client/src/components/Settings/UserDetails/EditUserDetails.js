import React, { useContext, useState } from "react";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import UserContext from "../../../context/UserContext";
import { withStyles } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

import style from "../styles";

const EditUserDetails = props => {
  const context = useContext(UserContext);
  const { name, email, phoneNumber } = context.user;
  const [userData, setUserData] = useState({ name, email, phoneNumber });

  const editUser = async editedData => {
    await context.updateUser(editedData);
    props.toggleView();
  };

  return (
    <div>
      <form className="user-form">
        <TextField
          id={"name"}
          label={"Name"}
          fullWidth={true}
          placeholder={"Name"}
          name={"name"}
          onChange={e => setUserData({ ...userData, name: e.target.value })}
          value={userData.name}
        />
        <TextField
          id={"email"}
          label={"Email"}
          fullWidth={true}
          placeholder={"Email"}
          name={"email"}
          onChange={e => setUserData({ ...userData, email: e.target.value })}
          value={userData.email}
        />
        <TextField
          id={"phone_num"}
          label={"Phone Number"}
          fullWidth={true}
          placeholder={"Phone Number"}
          name={"phone_num"}
          onChange={e =>
            setUserData({ ...userData, phoneNumber: e.target.value })
          }
          value={userData.phoneNumber}
        />
      </form>
      <Button onClick={props.toggleView}>
        <Typography variant="button" style={{ color: "black" }}>
          cancel
        </Typography>
      </Button>
      <Button onClick={() => editUser(userData)}>
        <Typography variant="button" style={{ color: "black" }}>
          save
        </Typography>
      </Button>
    </div>
  );
};

export default withStyles(style)(EditUserDetails);
