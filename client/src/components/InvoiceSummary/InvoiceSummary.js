import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, Grid } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

import SingleLineInput from './SingleLineInput';

const styles = theme => ({
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
    [theme.breakpoints.up(600 + theme.spacing.unit * 2 * 2)]: {
      width: '30%',
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  },
  paper: {
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 3,
    padding: theme.spacing.unit * 2,
    [theme.breakpoints.up(600 + theme.spacing.unit * 3 * 2)]: {
      marginTop: theme.spacing.unit * 6,
      marginBottom: theme.spacing.unit * 6,
      padding: theme.spacing.unit * 3
    }
  }
});

const InvoiceSummary = props => {
  const { classes } = props;

  return (
    <div className={classes.layout}>
      <Paper className={classes.paper}>
        <Typography variant="h5" gutterBottom>
          Invoice Summary
        </Typography>

        <Grid container spacing={24} className={classes.gridTop}>
          <Grid item xs={6} sm={3}>
            Invoice #{props.invoice.number}
          </Grid>
          <Grid item xs={6} sm={3}>
            Date: {props.invoice.date ? props.invoice.date.toString() : ''}
          </Grid>
          <Grid item xs={6} sm={3}>
            Due Date:{' '}
            {props.invoice.dueDate ? props.invoice.dueDate.toString() : ''}
          </Grid>
        </Grid>
        <Grid container spacing={24} className={classes.gridTop}>
          <Grid item xs={12} sm={6}>
            {props.invoice.company.name}
            {props.invoice.company.email}
            {props.invoice.company.phoneNumber}
            {props.invoice.company.address1}
            {props.invoice.company.address2}
            {props.invoice.company.zipCode}
            {props.invoice.company.city}
            {props.invoice.company.state}
          </Grid>
          <Grid item xs={12} sm={6}>
            Bill To:
            {props.invoice.customer.name}
            {props.invoice.customer.email}
            {props.invoice.customer.phoneNumber}
            {props.invoice.customer.address1}
            {props.invoice.customer.address2}
            {props.invoice.customer.zipCode}
            {props.invoice.customer.city}
            {props.invoice.customer.state}
          </Grid>
        </Grid>
        <Grid container spacing={24} className={classes.gridTop}>
          <Grid item xs={6} sm={3}>
            Items
            {props.invoice.items
              ? props.invoice.items.map(item => {
                  return (
                    <React.Fragment>
                      {item.quantity}
                      {item.name}
                      {item.description}
                      {item.cost}
                      {item.amount}
                    </React.Fragment>
                  );
                })
              : null}
          </Grid>
        </Grid>
        <Grid container spacing={24} className={classes.gridTop}>
          <Grid item xs={12}>
            Subtotal: {props.invoice.subtotal}
          </Grid>
          <Grid item xs={12}>
            Discount: {props.invoice.discount}
          </Grid>
          <Grid item xs={12}>
            Shipping: {props.invoice.shipping}
          </Grid>
          <Grid item xs={12}>
            Tax: {props.invoice.tax}
          </Grid>
          <Grid item xs={12}>
            Total: {props.invoice.total}
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default withStyles(styles)(InvoiceSummary);
