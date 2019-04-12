import React from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

function InvoiceBalance() {
  return (
    <React.Fragment>
      <Grid container spacing={24}>
        <Grid item xs={12} sm={12}>
          <TextField
            required
            id="address1"
            name="subtotal"
            label="Subtotal"
            fullWidth
            autoComplete="billing address-line1"
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            id="address2"
            name="discount"
            label="Discount"
            fullWidth
            autoComplete="billing address-line2"
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            required
            id="city"
            name="tax"
            label="Tax"
            fullWidth
            autoComplete="billing address-level2"
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField id="state" name="shipping" label="Shipping" fullWidth />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            required
            id="zip"
            name="total"
            label="Total"
            fullWidth
            autoComplete="billing postal-code"
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            required
            id="email"
            name="amountPaid"
            label="Amount Paid"
            fullWidth
            autoComplete="billing country"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default InvoiceBalance;
