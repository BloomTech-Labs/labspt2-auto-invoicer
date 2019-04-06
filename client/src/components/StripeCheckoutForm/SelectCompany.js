import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

import styles from './styles';

const SelectCompany = props => {
  const { classes, onChangeHandler, value, companies } = props;
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
      label="Company"
      name="company"
      className={classes.textField}
      value={value}
      onChange={onChangeHandler}
      SelectProps={{
        MenuProps: {
          className: classes.menu
        }
      }}
      FormHelperTextProps={{ className: classes.helperText }}
      helperText="Please select your company"
      margin="normal"
    >
      {companies.map(company => (
        <MenuItem key={company._id} value={company.name}>
          {company.name}
        </MenuItem>
      ))}
    </TextField>
  );
};

export default withStyles(styles)(SelectCompany);
