import React from "react";

//import { withStyles } from "@material-ui/core/styles";

//import styles from "./styles";
import { TextField } from "../../../node_modules/@material-ui/core";

const InvoiceDescription = props => {
  const { classes, onChangeHandler, value } = props;
  return (
    <TextField
      id="filled-name"
      label="Invoice Description"
      //className={classes.textField}
      //value={value}
      //onChange={onChangeHandler}
      style={{ width: 400 }}
      InputLabelProps={{ style: { fontSize: 20 } }}
      InputProps={{ style: { fontSize: 20 } }}
      margin="normal"
      variant="filled"
    />
  );
};

export default InvoiceDescription;
