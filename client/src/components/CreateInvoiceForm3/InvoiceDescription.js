import React from "react";
import { withStyles } from "@material-ui/core/styles";
//import styles from "./styles";
import { TextField } from "@material-ui/core";

const styles = theme => ({
  textField: {
    width: 200,

    [`@media (max-width: 600px)`]: {
      width: 400
    }
  }
});

const InvoiceDescription = props => {
  const { classes, onChangeHandler, value, error, helperText } = props;
  return (
    <TextField
      id="filled-name"
      label="Invoice Description"
      className={classes.textField}
      value={value}
      onChange={onChangeHandler}
      //style={{ width: 200 }}
      InputLabelProps={{ style: { fontSize: 20 } }}
      InputProps={{ style: { fontSize: 20 } }}
      margin="normal"
      //variant="filled"
      error={error}
      helperText={helperText}
    />
  );
};

export default withStyles(styles)(InvoiceDescription);
