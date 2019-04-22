import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';

import { CreateCompany } from '../../graphQL/mutations/companies';

class CompanyFormDialog extends Component {
  state = {
    isOpened: true,
    name: '',
    email: '',
    phoneNumber: '',
    address1: '',
    address2: '',
    zipCode: '',
    city: '',
    state: ''
  };

  handleSave = async () => {
    const {
      name,
      email,
      phoneNumber,
      address1,
      address2,
      zipCode,
      city,
      state
    } = this.state;
    const result = await CreateCompany(
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
      '_id'
    );
    // console.log(result.createCompany._id);
    this.setState({
      isOpened: false,
      name: '',
      email: '',
      phoneNumber: '',
      address1: '',
      address2: '',
      zipCode: '',
      city: '',
      state: ''
    });
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const {
      name,
      email,
      phoneNumber,
      address1,
      address2,
      zipCode,
      city,
      state
    } = this.state;
    return (
      <div>
        <Dialog
          maxWidth="xs"
          open={this.state.isOpened}
          onClose={this.props.onClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">New Company</DialogTitle>
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
              onChange={this.handleChange}
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
              onChange={this.handleChange}
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
              onChange={this.handleChange}
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
              onChange={this.handleChange}
            />
            <TextField
              margin="dense"
              id="address2"
              name="address2"
              value={address2}
              label="Address 2"
              type="text"
              fullWidth
              onChange={this.handleChange}
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
              onChange={this.handleChange}
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
              onChange={this.handleChange}
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
              onChange={this.handleChange}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.props.onClose} color="primary">
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

export { CompanyFormDialog };
