import React from "react";

//import { withStyles } from "@material-ui/core/styles";

//import styles from "./styles";
import { TextField } from "../../../node_modules/@material-ui/core";

const InvoiceNumberInput = props => {
  const { classes, onChangeHandler, value } = props;
  return (
    <TextField
      InputProps={{
        inputProps: {
          //className: classes.textField
        }
      }}
      InputLabelProps={
        {
          //className: classes.label
        }
      }
      id="standard-with-placeholder"
      style={{ fontSize: "2rem" }}
      label="Invoice Number"
      placeholder="Enter invoice number"
      //className={classes.textField}
      margin="normal"
      name="name"
      value={value}
      onChange={onChangeHandler}
    />
  );
};

export default InvoiceNumberInput;
//export default withStyles(styles)(InvoiceNumberInput);
