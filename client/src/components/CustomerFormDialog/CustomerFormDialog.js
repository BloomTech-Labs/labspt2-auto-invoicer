import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';

import { CreateCustomer } from '../../graphQL/mutations/customers';

class CustomerFormDialog extends Component {
  state = {
    isOpened: false,
    name: '',
    email: '',
    phone_num: '',
    address_1: '',
    address_2: '',
    postal_code: '',
    city: '',
    state: '',
    country: ''
  };

  handleClickOpen = () => {
    this.setState({ isOpened: true });
  };

  handleClose = () => {
    this.setState({ isOpened: false });
  };

  handleSave = async () => {
    const {
      name,
      email,
      phone_num,
      address_1,
      address_2,
      postal_code,
      city,
      state,
      country
    } = this.state;
    await CreateCustomer(
      {
        name,
        email,
        phone_num,
        address_1,
        address_2,
        postal_code,
        city,
        state,
        country
      },
      '_id'
    );
    this.setState({
      isOpened: false,
      name: '',
      email: '',
      phone_num: '',
      address_1: '',
      address_2: '',
      postal_code: '',
      city: '',
      state: '',
      country: ''
    });
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div>
        <Dialog
          maxWidth="xs"
          open={this.state.isOpened}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Create Customer</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              name="name"
              value={this.state.name}
              label="Name"
              type="text"
              fullWidth
              required
              onChange={this.handleChange}
            />
            <TextField
              margin="dense"
              id="email"
              name="email"
              value={this.state.email}
              label="Email"
              type="email"
              fullWidth
              onChange={this.handleChange}
            />
            <TextField
              margin="dense"
              id="phone"
              name="phone_num"
              value={this.state.phone_num}
              label="Phone Number"
              type="text"
              fullWidth
              onChange={this.handleChange}
            />
            <TextField
              margin="dense"
              id="address"
              name="address_1"
              value={this.state.address_1}
              label="Address 1"
              type="text"
              fullWidth
              onChange={this.handleChange}
            />
            <TextField
              margin="dense"
              id="address 2"
              name="address_2"
              value={this.state.address_2}
              label="Address 2"
              type="text"
              fullWidth
              onChange={this.handleChange}
            />
            <TextField
              margin="dense"
              id="zipcode"
              name="postal_code"
              value={this.state.postal_code}
              label="Zip Code"
              type="text"
              fullWidth
              onChange={this.handleChange}
            />
            <TextField
              margin="dense"
              id="city"
              name="city"
              value={this.state.city}
              label="City"
              type="text"
              fullWidth
              onChange={this.handleChange}
            />
            <TextField
              margin="dense"
              id="state"
              name="state"
              value={this.state.state}
              label="State"
              type="text"
              fullWidth
              onChange={this.handleChange}
            />
            <TextField
              margin="dense"
              id="country"
              name="country"
              value={this.state.country}
              label="Country"
              type="text"
              fullWidth
              onChange={this.handleChange}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleSave} color="primary">
              Save
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export { CustomerFormDialog };
