import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';

import { CreateItem } from '../../graphQL/mutations/items';

class ItemFormDialog extends Component {
  state = {
    isOpened: true,
    name: '',
    description: '',
    quantity: '',
    cost: '',
    amount: ''
  };

  handleSave = async () => {
    const { name, description, quantity, cost, amount } = this.state;
    await CreateItem(
      {
        name,
        description,
        quantity,
        cost,
        amount
      },
      '_id'
    );
    this.setState({
      isOpened: false,
      name: '',
      description: '',
      quantity: '',
      cost: '',
      amount: ''
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
          <DialogTitle id="form-dialog-title">New Item</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              name="name"
              value={this.state.name}
              label="Item"
              type="text"
              fullWidth
              required
              onChange={this.handleChange}
            />
            <TextField
              margin="dense"
              id="description"
              name="description"
              value={this.state.description}
              label="Description"
              type="text"
              fullWidth
              onChange={this.handleChange}
            />
            <TextField
              margin="dense"
              id="quantity"
              name="quantity"
              value={this.state.quantity}
              label="Quantity"
              type="text"
              fullWidth
              required
              onChange={this.handleChange}
            />
            <TextField
              margin="dense"
              id="cost"
              name="cost"
              value={this.state.cost}
              label="Cost"
              type="text"
              fullWidth
              required
              onChange={this.handleChange}
            />
            <TextField
              margin="dense"
              id="amount"
              name="amount"
              value={this.state.amount}
              label="Amount"
              type="text"
              fullWidth
              required
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

export { ItemFormDialog };
