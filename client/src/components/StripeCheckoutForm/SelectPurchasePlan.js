import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

import styles from './styles';

const SelectPurchasePlan = props => {
  const { classes, onChangeHandler, value } = props;
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
      select
      label="Choose a plan"
      name="unlimited"
      className={classes.textField}
      value={value}
      onChange={onChangeHandler}
      SelectProps={{
        MenuProps: {
          className: classes.menu
        }
      }}
      FormHelperTextProps={{ className: classes.helperText }}
      helperText="Please select your Plan"
      margin="normal"
    >
      <MenuItem value={false}>Credits</MenuItem>
      <MenuItem value={true}>1 Month Unlimited</MenuItem>
    </TextField>
  );
};

export default withStyles(styles)(SelectPurchasePlan);
