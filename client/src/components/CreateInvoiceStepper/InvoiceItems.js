import React, { useContext, useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

import UserContext from '../../context/UserContext';

import ItemFormDialog from '../ItemFormDialog';

const InvoiceItems = props => {
  const context = useContext(UserContext);

  const [dialogState, setDialogState] = useState(false);

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

  const handleClose = () => {
    setDialogState(false);
  };

  useEffect(() => {
    console.log('[props.items in InvoiceItems]: ', props.items);
  }, [props.items]);

  return (
    <React.Fragment>
      <Grid item xs={12} sm={12}>
        <TextField
          name="itemId" // event.target.name
          id="item"
          select
          label="Item"
          // className={classes.textField}
          value={'test'}
          onChange={handleSelectItem}
          // SelectProps={{
          //   MenuProps: {
          //     className: classes.menu
          //   }
          // }}
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
    </React.Fragment>
  );
};

export default InvoiceItems;
