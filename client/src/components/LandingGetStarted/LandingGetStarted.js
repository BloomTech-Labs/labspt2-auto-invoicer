import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

import CheckIcon from '@material-ui/icons/Check';
import ClearIcon from '@material-ui/icons/Clear';

import './LandingGetStarted.css';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 280,
    backgroundColor: theme.palette.background.paper,
    boxShadow: '0 3px 5px 2px rgba(0, 0, 0, 0.15)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  greenButton: {
    fontSize: 14,
    backgroundColor: '#689f38',
    '&:hover': {
      backgroundColor: '#212121'
    }
  },
  section1: {
    margin: `${theme.spacing.unit * 3}px ${theme.spacing.unit * 2}px`
  },
  section2: {
    margin: theme.spacing.unit * 2
  },
  section3: {
    margin: `${theme.spacing.unit * 6}px ${theme.spacing.unit * 2}px ${theme
      .spacing.unit * 2}px`
  },
  icon: {
    margin: theme.spacing.unit,
    fontSize: 18
  },
  features: {
    display: 'flex',
    alignItems: 'center',
    color: '#689f38',
    fontSize: 14
  },
  lockedFeatures: {
    display: 'flex',
    alignItems: 'center',
    color: 'rgba(0, 0, 0, 0.54)',
    fontSize: 14
  },
  description: {
    fontSize: 14
  }
});

const LandingGetStarted = props => {
  const { classes } = props;
  return (
    <div className="landing-get-started-container">
      <div className="landing-get-started">
        <div className="get-started-text">STOP WAITING AND START INVOICING</div>
        <div className="card">
          <div className={classes.root}>
            <div className={classes.section1}>
              <Grid container alignItems="center">
                <Grid item xs>
                  <Typography gutterBottom variant="h4">
                    Free
                  </Typography>
                </Grid>
              </Grid>
              <Typography className={classes.features}>
                <CheckIcon className={classes.icon} />
                Unlimited Invoices
              </Typography>
              <Typography className={classes.lockedFeatures}>
                <ClearIcon className={classes.icon} />
                Unlimited Customers
              </Typography>
              <Typography className={classes.lockedFeatures}>
                <ClearIcon className={classes.icon} />
                Unlimited Companies
              </Typography>
            </div>
            <Divider variant="middle" />
            <div className={classes.section2}>
              <Typography gutterBottom className={classes.description}>
                Insert description for free here
              </Typography>
            </div>
            <div className={classes.section3}>
              <Button
                variant="contained"
                color="primary"
                className={classes.greenButton}
                fullWidth
              >
                Try For free
              </Button>
            </div>
          </div>
        </div>
        <div className="card">
          <div className={classes.root}>
            <div className={classes.section1}>
              <Grid container alignItems="center">
                <Grid item xs>
                  <Typography gutterBottom variant="h4">
                    Premium
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography gutterBottom variant="h6">
                    $6/month
                  </Typography>
                </Grid>
              </Grid>
              <Typography className={classes.features}>
                <CheckIcon className={classes.icon} />
                Unlimited Invoices
              </Typography>
              <Typography className={classes.features}>
                <CheckIcon className={classes.icon} />
                Unlimited Customers
              </Typography>
              <Typography className={classes.features}>
                <CheckIcon className={classes.icon} />
                Unlimited Companies
              </Typography>
            </div>
            <Divider variant="middle" />
            <div className={classes.section2}>
              <Typography gutterBottom className={classes.description}>
                Insert description for premium here
              </Typography>
            </div>
            <div className={classes.section3}>
              <Button
                variant="contained"
                color="primary"
                className={classes.greenButton}
                fullWidth
              >
                Get Premium
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withStyles(styles)(LandingGetStarted);