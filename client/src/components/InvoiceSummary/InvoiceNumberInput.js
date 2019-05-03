import React from "react";

import { withStyles } from "@material-ui/core/styles";

import { TextField } from "@material-ui/core";

const styles = theme => ({
  textField: {
    width: 200,

    [`@media (max-width: 600px)`]: {
      width: 400
    }
  }
});

const InvoiceNumberInput = props => {
  const { classes, onChangeHandler, value } = props;
  return (
    <TextField
      id="filled-name"
      label="Invoice #"
      className={classes.textField}
      value={value}
      onChange={onChangeHandler}
      InputLabelProps={{ style: { fontSize: 14 } }}
      InputProps={{ style: { fontSize: 14 } }}
      margin="normal"
    />
  );
};

export default withStyles(styles)(InvoiceNumberInput);
