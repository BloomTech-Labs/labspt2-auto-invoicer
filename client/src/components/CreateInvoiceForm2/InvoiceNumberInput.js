import React from "react";

import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";

//import { TextField } from "../../../node_modules/@material-ui/core";
import { TextField } from "@material-ui/core";

const InvoiceNumberInput = props => {
  const { classes, onChangeHandler, value } = props;
  return (
    <TextField
      id="filled-name"
      label="Invoice #"
      className={classes.textField}
      value={value}
      onChange={onChangeHandler}
      style={{ width: 200 }}
      InputLabelProps={{ style: { fontSize: 20 } }}
      InputProps={{ style: { fontSize: 20 } }}
      margin="normal"
      variant="filled"
    />
  );
};

//export default InvoiceNumberInput;
export default withStyles(styles)(InvoiceNumberInput);
