import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

import styles from './styles';

const currencies = [
  {
    value: 'USD',
    label: '$'
  },
  {
    value: 'EUR',
    label: '€'
  },
  {
    value: 'BTC',
    label: '฿'
  },
  {
    value: 'JPY',
    label: '¥'
  }
];

const SelectCurrency = props => {
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
      id="standard-select-currency"
      select
      label="Currency"
      name="currency"
      className={classes.textField}
      value={value}
      onChange={onChangeHandler}
      SelectProps={{
        MenuProps: {
          className: classes.menu
        }
      }}
      FormHelperTextProps={{ className: classes.helperText }}
      helperText="Please select your currency"
      margin="normal"
    >
      {currencies.map(option => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
};

export default withStyles(styles)(SelectCurrency);
