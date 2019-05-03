import React from "react";
import PropTypes from "prop-types";
import { withStyles, Grid } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

//import components
import SingleLineInput from "./SingleLineInput";

const styles = {
  card: {
    width: 600,
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 200,
    backgroundColor: "#eff7f2"
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  },
  gridTop: {
    borderTop: "1px solid white",
    flexGrow: 1
  }
};

const InvoiceSummary = props => {
  const { classes } = props;

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Placeholder
        </Typography>
        <Typography variant="h5" component="h2">
          Invoice Summary
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          sub-heading
        </Typography>
        <Grid container spacing={24} className={classes.gridTop}>
          <Grid item xs={6} sm={3}>
            <SingleLineInput label="Invoice Number" />
          </Grid>
          <Grid item xs={6} sm={3}>
            <SingleLineInput label="Date Issue" />
          </Grid>
          <Grid item xs={6} sm={3}>
            <SingleLineInput label="Date Due" />
          </Grid>
        </Grid>
        <Grid container spacing={24} className={classes.gridTop}>
          <Grid item xs={12} sm={6}>
            <SingleLineInput label="Company Name" />
            <SingleLineInput label="Email" />
            <SingleLineInput label="Phone" />
            <SingleLineInput label="Address" />
            <SingleLineInput label="Zip Code" />
            <SingleLineInput label="City" />
            <SingleLineInput label="State" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <SingleLineInput label="Customer Name" />
            <SingleLineInput label="Email" />
            <SingleLineInput label="Phone" />
            <SingleLineInput label="Address" />
            <SingleLineInput label="Zip Code" />
            <SingleLineInput label="City" />
            <SingleLineInput label="State" />
          </Grid>
        </Grid>
        <Grid container spacing={24} className={classes.gridTop}>
          <Grid item xs={6} sm={3}>
            <SingleLineInput label="Item" />
          </Grid>
          <Grid item xs={6} sm={3}>
            <SingleLineInput label="Quantity" />
          </Grid>
          <Grid item xs={6} sm={3}>
            <SingleLineInput label="Rate" />
          </Grid>
          <Grid item xs={6} sm={3}>
            <SingleLineInput label="Amount" />
          </Grid>
        </Grid>
        <Grid container spacing={24} className={classes.gridTop}>
          <Grid item xs={12} sm={6}>
            <SingleLineInput label="Subtotal" />
            <SingleLineInput label="Discount" />
            <SingleLineInput label="Tax" />
            <SingleLineInput label="Shipping" />
            <SingleLineInput label="Total" />
            <SingleLineInput label="Balance" />
          </Grid>
        </Grid>
      </CardContent>
      <CardActions>
        <Button size="small">Generate</Button>
      </CardActions>
    </Card>
  );
};

InvoiceSummary.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(InvoiceSummary);
