import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import TextField from "@material-ui/core/TextField";

const TAX_RATE = 0.07;

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 700
  }
});

function ccyFormat(num) {
  return `${num.toFixed(2)}`;
}

function priceRow(qty, unit) {
  return qty * unit;
}

function createRow(id, desc, qty, unit) {
  const price = priceRow(qty, unit);
  return { id, desc, qty, unit, price };
}

function subtotal(items) {
  return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
}

const rows = [
  ["Paperclips (Box)", 100, 1.15]
  //["Paper (Stack)", 10, 45.99]
  //   ["Waste Basket", 2, 17.99]
].map((row, id) => createRow(id, ...row));

const invoiceSubtotal = subtotal(rows);
const invoiceTaxes = TAX_RATE * invoiceSubtotal;
const invoiceTotal = invoiceTaxes + invoiceSubtotal;

class index extends Component {
  constructor() {
    super();
    this.state = {
      itemDescription: "",
      itemQuantity: "",
      itemRate: "",
      itemAmount: ""
    };
  }
  //const { classes } = props;

  changeHandler = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    //console.log(this.state);
  };

  render() {
    return (
      <div>
        <Paper>
          {" "}
          {/* className={classes.root} */}
          <Table>
            {" "}
            {/* className={classes.table} */}
            <TableHead>
              <TableRow>
                <TableCell>Item</TableCell>
                <TableCell align="right">Quantity</TableCell>
                <TableCell align="right">Rate</TableCell>
                <TableCell align="right">Amount</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {/* {rows.map(row => (
                <TableRow key={row.id}>
                  <TableCell>{row.desc}</TableCell>
                  <TableCell align="right">{row.qty}</TableCell>
                  <TableCell align="right">{row.unit}</TableCell>
                  <TableCell align="right">{ccyFormat(row.price)}</TableCell>
                </TableRow>
              ))} */}

              <TableRow>
                <TableCell>
                  <TextField
                    id="itemDescription"
                    name="itemDescription"
                    placeholder="Item Description"
                    value={this.state.itemDescription}
                    onChange={event => this.changeHandler(event)}
                  />
                </TableCell>
                <TableCell align="right">
                  <TextField
                    id="itemQuantity"
                    name="itemQuantity"
                    placeholder="Item Quantity"
                    value={this.state.itemQuantity}
                    onChange={event => this.changeHandler(event)}
                  />
                </TableCell>
                <TableCell align="right">
                  <TextField
                    id="itemRate"
                    name="itemRate"
                    placeholder="Rate"
                    value={this.state.itemRate}
                    onChange={event => this.changeHandler(event)}
                  />
                </TableCell>
                <TableCell align="right">
                  <TextField
                    id="itemAmount"
                    name="itemAmount"
                    placeholder="Amount"
                    value={this.state.itemAmount}
                    onChange={event => this.changeHandler(event)}
                  />
                </TableCell>
              </TableRow>

              <button onClick={event => this.onSubmit(event)}>Submit</button>

              {console.log(this.state.itemDescription)}
              {console.log(this.state.itemQuantity)}
              {console.log(this.state.itemRate)}
              {console.log(this.state.itemAmount)}

              <TableRow>
                <TableCell rowSpan={6} />
                <TableCell colSpan={2}>Subtotal</TableCell>
                <TableCell align="right">
                  {ccyFormat(invoiceSubtotal)}
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell colSpan={2}>Discount</TableCell>
                <TableCell align="right">0%</TableCell>
              </TableRow>

              <TableRow>
                <TableCell colSpan={2}>Tax</TableCell>
                {/* <TableCell align="right">{`${(TAX_RATE * 100).toFixed(
                  0
                )} %`}</TableCell> */}
                <TableCell align="right">{ccyFormat(invoiceTaxes)}</TableCell>
              </TableRow>

              <TableRow>
                <TableCell colSpan={2}>Shipping</TableCell>
                <TableCell align="right">0</TableCell>
              </TableRow>

              <TableRow>
                <TableCell colSpan={2}>Total</TableCell>
                <TableCell align="right">{ccyFormat(invoiceTotal)}</TableCell>
              </TableRow>

              <TableRow>
                <TableCell colSpan={2}>Amount Paid:</TableCell>
                <TableCell align="right">$0</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Paper>
      </div>
    );
  }
}

index.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(index);
