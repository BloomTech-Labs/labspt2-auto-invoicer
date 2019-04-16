import React from "react";

import { withStyles } from "@material-ui/core/styles";

import styles from "./styles";
//import { TextField } from "../../../node_modules/@material-ui/core";
import { TextField } from "@material-ui/core";

const EmailTo = props => {
  const { classes, onChangeHandler, value } = props;
  return (
    <TextField
      id="filled-name"
      label="Client Email"
      className={classes.textField}
      value={value}
      onChange={onChangeHandler}
      style={{ width: 300 }}
      InputLabelProps={{ style: { fontSize: 10 } }}
      InputProps={{ style: { fontSize: 10 } }}
      margin="normal"
      variant="filled"
    />
  );
};

export default withStyles(styles)(EmailTo);
