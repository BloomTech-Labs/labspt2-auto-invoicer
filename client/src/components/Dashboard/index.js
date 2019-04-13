import React from 'react';

import './Dashboard.css';

import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import styles from './styles';

import InvoicedChart from './InvoicedChart';
// import CollectedChart from './CollectedChart';
// import OutstandingChart from './OutstandingChart';
// import PastDueChart from './PastDueChart';
import StatisticsChart from './StatisticsChart';

class Dashboard extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Grid container spacing={16}>
          <Grid item xs>
            <Paper elevation={5} className={classes.paper}>
              <Typography variant="h3" gutterBottom>
                Statistics
              </Typography>
              <StatisticsChart />
            </Paper>
          </Grid>
          <Grid item xs>
            <Paper elevation={5} className={classes.paper}>
              <Typography variant="h3" gutterBottom>
                Invoiced
              </Typography>
              <InvoicedChart />
            </Paper>
          </Grid>
        </Grid>
        <Grid container spacing={16}>
          <Grid item xs>
            <Paper elevation={5} className={classes.paper}>
              <Typography variant="h3" gutterBottom>
                Outstanding
              </Typography>
              {/* <OutstandingChart /> */}
            </Paper>
          </Grid>
          <Grid item xs>
            <Paper elevation={5} className={classes.paper}>
              <Typography variant="h3" gutterBottom>
                Past Due
              </Typography>
              {/* <PastDueChart /> */}
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(Dashboard);
