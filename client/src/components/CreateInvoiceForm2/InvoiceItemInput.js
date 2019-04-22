import React from 'react';
//import "./InvoiceItemsInput.css";
import { TextField } from '@material-ui/core';

import {
  withStyles,
  Paper,
  Table,
  TableRow,
  TableCell,
  TableBody
} from '@material-ui/core';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto'
  },
  table: {
    //maxWidth: 600
  }
});

const InvoiceItemsInput = props => {
  return props.items.map((val, idx) => {
    let itemId = `item-${idx}`,
      descriptionId = `description-${idx}`,
      quantityId = `quantity-${idx}`,
      costId = `cost-${idx}`,
      amountId = `amount-${idx}`;

    const { classes } = props;

    return (
      <Paper className={classes.root} key={idx}>
        <Table className={classes.table}>
          <TableBody>
            <TableRow>
              <TableCell align="center">
                <TextField
                  type="text"
                  name={itemId}
                  data-id={idx}
                  id={itemId}
                  value={props.items[idx].name}
                  className="name"
                  placeholder={`Name #${idx + 1}`}
                  InputProps={{
                    //style: { fontSize: 14 },
                    disableUnderline: true
                  }}
                  //variant="filled"
                />
              </TableCell>
              <TableCell align="center">
                <TextField
                  type="text"
                  name={descriptionId}
                  data-id={idx}
                  id={descriptionId}
                  value={props.items[idx].description}
                  className="description"
                  placeholder={`Description #${idx + 1}`}
                  InputProps={{
                    //style: { fontSize: 14 },
                    disableUnderline: true
                  }}
                  //variant="outlined"
                />
              </TableCell>
              <TableCell align="center">
                <TextField
                  type="text"
                  name={quantityId}
                  data-id={idx}
                  id={quantityId}
                  value={props.items[idx].quantity}
                  className="quantity"
                  placeholder={`Quantity #${idx + 1}`}
                  InputProps={{
                    //style: { fontSize: 14 },
                    disableUnderline: true
                  }}
                  //variant="outlined"
                />
              </TableCell>
              <TableCell align="center">
                <TextField
                  type="text"
                  name={costId}
                  data-id={idx}
                  id={costId}
                  value={props.items[idx].cost}
                  className="cost"
                  placeholder={`Cost #${idx + 1}`}
                  InputProps={{
                    //style: { fontSize: 14 },
                    disableUnderline: true
                  }}
                  //variant="outlined"
                />
              </TableCell>
              <TableCell align="center">
                <TextField
                  type="text"
                  name={amountId}
                  data-id={idx}
                  id={amountId}
                  value={props.items[idx].amount}
                  className="amount"
                  placeholder={`Amount #${idx + 1}`}
                  InputProps={{
                    //style: { fontSize: 14 },
                    disableUnderline: true
                  }}
                  //variant="outlined"
                />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Paper>
    );
  });
};

export default withStyles(styles)(InvoiceItemsInput);
