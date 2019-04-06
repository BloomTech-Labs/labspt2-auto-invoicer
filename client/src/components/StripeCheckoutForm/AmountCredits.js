import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import styles from './styles';

const AmountCredits = props => {
  const { classes, onChangeHandler, value, disabled } = props;
  return (
    <TextField
      InputProps={{
        inputProps: {
          className: classes.textField
        }
      }}
      InputLabelProps={{
        className: classes.label
      }}
      id="standard-number"
      label="How many credits do you want?"
      name="quantity"
      disabled={disabled}
      value={disabled ? 0 : value}
      onChange={onChangeHandler}
      className={classes.textField}
      margin="normal"
    />
  );
};

export default withStyles(styles)(AmountCredits);
