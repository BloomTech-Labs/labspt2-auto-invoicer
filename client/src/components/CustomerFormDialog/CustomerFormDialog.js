import React, { useContext, useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';

import UserContext from '../../context/UserContext';

import { CreateCustomer } from '../../graphQL/mutations/customers';

const CustomerFormDialog = props => {
  const context = useContext(UserContext);

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    address1: '',
    address2: '',
    zipCode: '',
    city: '',
    state: ''
  });

  const {
    name,
    email,
    phoneNumber,
    address1,
    address2,
    zipCode,
    city,
    state
  } = formState;

  const handleSaveCustomer = async () => {
    const result = await CreateCustomer(
      {
        name,
        email,
        phoneNumber,
        address1,
        address2,
        zipCode,
        city,
        state
      },
      context.user.companies[0]._id, // change based on props
      '_id'
    );
    setFormState({
      name: '',
      email: '',
      phoneNumber: '',
      address1: '',
      address2: '',
      zipCode: '',
      city: '',
      state: ''
    });
    props.onClose();
  };

  const handleInputChange = e => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <Dialog
        maxWidth="xs"
        open={true}
        onClose={props.onClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">New Customer</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            name="name"
            value={name}
            label="Name"
            type="text"
            fullWidth
            required
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            id="email"
            name="email"
            value={email}
            label="Email"
            type="email"
            fullWidth
            required
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            id="phone"
            name="phoneNumber"
            value={phoneNumber}
            label="Phone Number"
            type="text"
            fullWidth
            required
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            id="address1"
            name="address1"
            value={address1}
            label="Address 1"
            type="text"
            fullWidth
            required
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            id="address2"
            name="address2"
            value={address2}
            label="Address 2"
            type="text"
            fullWidth
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            id="zipcode"
            name="zipCode"
            value={zipCode}
            label="Zip Code"
            type="text"
            fullWidth
            required
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            id="city"
            name="city"
            value={city}
            label="City"
            type="text"
            fullWidth
            required
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            id="state"
            name="state"
            value={state}
            label="State"
            type="text"
            fullWidth
            required
            onChange={handleInputChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={props.onClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSaveCustomer} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default CustomerFormDialog;
