import React, { useContext } from "react";

import Edit from "../EditIcon";
import UserContext from "../../../context/UserContext";
import { withStyles } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

import style from "../styles";

const ViewUserDetails = props => {
  const context = useContext(UserContext);
  const { name, email, phoneNumber } = context.user;

  return (
    <div className="cardDetails">
      <div className="card-header">
        <Typography variant="h4">User Details</Typography>
        <div onClick={props.toggleView} className="edit">
          <Edit />
        </div>
      </div>
      <div className="infoContainer">
        <div className="info">
          <h2>Name: </h2>
          <p> {name}</p>
        </div>
        <div className="info">
          <h2>Email: </h2>
          <p>{email}</p>
        </div>
        <div className="info">
          <h2>Phone Number: </h2>
          <p>{phoneNumber}</p>
        </div>
      </div>
    </div>
  );
};

export default withStyles(style)(ViewUserDetails);
