import React, { useState, useContext, useEffect } from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

import UserContext from '../../context/UserContext';

import CompanyFormDialog from '../CompanyFormDialog';

const InvoiceCompany = props => {
  const context = useContext(UserContext);

  const [dialogState, setDialogState] = useState(false);

  const handleCompanySelect = e => {
    if (e.target.value === 'new') {
      setDialogState(true);
      props.onCompanySelect({
        _id: '',
        name: '',
        email: '',
        phoneNumber: '',
        address1: '',
        address2: '',
        zipCode: '',
        city: '',
        state: ''
      });
    }

    if (e.target.value !== 'new') {
      const [company] = context.user.companies.filter(
        company => company._id === e.target.value
      );
      props.onCompanySelect({
        _id: company._id,
        name: company.name,
        email: company.email,
        phoneNumber: company.phoneNumber,
        address1: company.address1,
        address2: company.address2,
        zipCode: company.zipCode,
        city: company.city,
        state: company.state
      });
    }
  };

  const handleClose = () => {
    setDialogState(false);
  };

  useEffect(() => {
    console.log('[props.company in InvoiceCompany]: ', props.company);
  }, [props.company]);

  // const { classes } = props;

  return (
    <React.Fragment>
      <TextField
        // name="companyId"
        id="company"
        select
        label="Company"
        // className={classes.textField}
        value={props.company._id}
        onChange={handleCompanySelect}
        // SelectProps={{
        //   MenuProps: {
        //     className: classes.menu
        //   }
        // }}
        helperText="Select a company"
        margin="normal"
      >
        {context.user.companies.map(company => (
          <MenuItem key={company._id} value={company._id}>
            {company.name}
          </MenuItem>
        ))}
        <MenuItem value="new">Add New Company</MenuItem>
      </TextField>
      {dialogState ? <CompanyFormDialog onClose={handleClose} /> : null}
    </React.Fragment>
  );
};

export default InvoiceCompany;
