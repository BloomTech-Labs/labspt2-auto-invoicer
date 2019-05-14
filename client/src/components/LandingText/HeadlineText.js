import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  container: {
    paddingTop: 100,
    paddingBottom: 50,
    width: '100%',
    background: '#2d2f31'
  },
  root: {
    width: '100%',
    maxWidth: 700,
    display: 'flex',
    flexDirection: 'column',
    margin: '0 auto'
  },
  subtext: {
    color: '#8bc34a'
  }
};

const HeadlineText = props => {
  const { classes } = props;
  return (
    <div className={classes.container}>
      <div className={classes.root}>
        <Typography
          variant="h1"
          style={{
            fontFamily: 'roboto',
            fontSize: 95,
            fontWeight: 500,
            color: 'white'
          }}
        >
          Invoicing Solved
        </Typography>
        <br />
        <Typography className={classes.subtext} variant="h4">
          Turn sales into cashflow.
        </Typography>
      </div>
    </div>
  );
};

export default withStyles(styles)(HeadlineText);
