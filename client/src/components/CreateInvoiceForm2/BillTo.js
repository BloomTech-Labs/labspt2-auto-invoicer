import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";

function BillTo() {
  return (
    <React.Fragment>
      <Typography variant="h4" gutterBottom>
        Bill To
      </Typography>
      <Grid container spacing={24}>
        {/* <Grid item xs={12} sm={3}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="fname"
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="lname"
          />
        </Grid> */}
        <Grid item xs={12} sm={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Address line 1"
            fullWidth
            autoComplete="billing address-line1"
            variant="filled"
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            id="address2"
            name="address2"
            label="Address line 2"
            fullWidth
            autoComplete="billing address-line2"
            variant="filled"
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="billing address-level2"
            variant="filled"
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            id="state"
            name="state"
            label="State/Province/Region"
            fullWidth
            variant="filled"
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
            autoComplete="billing postal-code"
            variant="filled"
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            required
            id="email"
            name="email"
            label="Client Email"
            fullWidth
            autoComplete="billing country"
            variant="filled"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default BillTo;
