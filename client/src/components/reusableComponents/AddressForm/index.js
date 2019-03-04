import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
//import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";

export default class index extends Component {
  render() {
    return (
      <React.Fragment>
        {/* <Typography variant="h6" gutterBottom>
          Shipping address 2
        </Typography> */}
        <Grid container spacing={14}>
          {" "}
          {/* Grad container spacing was 24 */}
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="firstName"
              name="firstName"
              label="Who is this invoice from?"
              fullWidth
              autoComplete="fname"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="lastName"
              name="lastName"
              label="Who is this invoice to?"
              fullWidth
              autoComplete="lname"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="address1"
              name="address1"
              label="Address line 1"
              fullWidth
              autoComplete="billing address-line1"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="city"
              name="city"
              label="City"
              fullWidth
              autoComplete="billing address-level2"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="state"
              name="state"
              label="State/Province/Region"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="zip"
              name="zip"
              label="Zip / Postal code"
              fullWidth
              autoComplete="billing postal-code"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="country"
              name="country"
              label="Country"
              fullWidth
              autoComplete="billing country"
            />
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}
