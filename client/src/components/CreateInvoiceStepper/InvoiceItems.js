import React, { useContext, useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

import UserContext from '../../context/UserContext';

import ItemFormDialog from '../ItemFormDialog';

const InvoiceItems = props => {
  const context = useContext(UserContext);

  const [dialogState, setDialogState] = useState(false);

  const handleClose = () => {
    setDialogState(false);
  };

  const handleSelectItem = e => {
    if (e.target.value === 'new') {
      setDialogState(true);
    }

    if (e.target.value !== 'new') {
      const [item] = context.user.companies[0].items.filter(
        item => item._id === e.target.value
      );
      props.onItemSelect([
        ...props.items,
        {
          _id: item._id,
          name: item.name,
          description: item.description,
          quantity: item.quantity,
          cost: item.cost,
          amount: item.amount
        }
      ]);
    }
  };

  const handleSubtotal = () => {
    const subtotal = props.items.reduce(
      (total, item) => (total += Number(item.amount)),
      0
    );
    props.handleSubtotal(subtotal);
  };

  useEffect(() => {
    handleSubtotal();
    console.log('[props.items in InvoiceItems]: ', props.items);
  }, [props.items]);

  return (
    <React.Fragment>
      <Grid item xs={12} sm={12}>
        <TextField
          id="item"
          select
          label="Item"
          value=""
          onChange={handleSelectItem}
          helperText="Select an item"
          margin="normal"
        >
          {context.user.companies[0].items
            ? context.user.companies[0].items.map(item => (
                <MenuItem key={item._id} value={item._id}>
                  {item.name}
                </MenuItem>
              ))
            : null}
          <MenuItem value="new">Add New Item</MenuItem>
        </TextField>
        {dialogState ? <ItemFormDialog onClose={handleClose} /> : null}
      </Grid>
      {props.items.length ? (
        <Grid container spacing={24}>
          <Grid item xs={12} />
          {props.items.map((val, index) => {
            const itemId = `item-${index}`;
            const descriptionId = `description-${index}`;
            const quantityId = `quantity-${index}`;
            const costId = `cost-${index}`;
            const amountId = `amount-${index}`;
            return (
              <React.Fragment>
                <Grid item xs={3}>
                  <TextField
                    type="text"
                    id={itemId}
                    name={itemId}
                    value={props.items[index].name}
                    InputProps={{
                      readOnly: true
                    }}
                  />
                </Grid>
                <Grid item xs={3}>
                  <TextField
                    type="text"
                    id={descriptionId}
                    name={descriptionId}
                    value={props.items[index].description}
                    InputProps={{
                      readOnly: true
                    }}
                  />
                </Grid>
                <Grid item xs={3}>
                  <TextField
                    type="text"
                    id={quantityId}
                    name={quantityId}
                    value={props.items[index].quantity}
                    InputProps={{
                      readOnly: true
                    }}
                  />
                </Grid>
                <Grid item xs={3}>
                  <TextField
                    type="text"
                    id={costId}
                    name={costId}
                    value={props.items[index].cost}
                    InputProps={{
                      readOnly: true
                    }}
                  />
                </Grid>
                <Grid item xs={3}>
                  <TextField
                    type="text"
                    id={amountId}
                    name={amountId}
                    value={props.items[index].amount}
                    InputProps={{
                      readOnly: true
                    }}
                  />
                </Grid>
              </React.Fragment>
            );
          })}
          <Grid item xs={12} />
          <Grid item xs={12} sm={6}>
            <TextField
              id="subtotal"
              name="subtotal"
              label="Subtotal"
              value={props.subtotal}
              InputProps={{
                readOnly: true
              }}
              fullWidth
            />
          </Grid>
        </Grid>
      ) : null}
    </React.Fragment>
  );
};

export default InvoiceItems;
