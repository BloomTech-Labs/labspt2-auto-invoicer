import React, { useContext } from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core/styles';

import UserContext from '../../context/UserContext';
import style from './styles';
// import style from '../EmptyInvoices/style'

const SelectCompany = props => {
  const context = useContext(UserContext);
  const { user, company, getCompany } = context;
  const { classes } = props;

  const handleSelectCompany = e => {
    const company = e.target.value;
    getCompany(company._id);
  };

  return (
    <Select
      className={classes.selectCompany}
      onChange={handleSelectCompany}
      value={company}
      renderValue={value => `Company: ${value.name}`}
    >
      {user.companies.map(company => {
        return (
          <MenuItem key={company._id} value={company}>
            {company.name}
          </MenuItem>
        );
      })}
    </Select>
  );
};

export default withStyles(style)(SelectCompany);
