import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Grow from '@material-ui/core/Grow';

import styles from './styles';

import InvoicedChart from './InvoicedChart';
// import CollectedChart from './CollectedChart';
// import OutstandingChart from './OutstandingChart';
// import PastDueChart from './PastDueChart';
import StatisticsChart from './StatisticsChart';

class Dashboard extends React.Component {
  state = { checked: false };
  componentDidMount() {
    setTimeout(() => this.setState({ checked: true }), 1500);
  }
  render() {
    const { classes } = this.props;
    const { checked } = this.state;

    return (
      <div className={classes.root}>
        <Grid container spacing={16}>
          <Grid item xs>
            <Grow in={checked}>
              <Paper elevation={5} className={classes.paper}>
                <Typography variant="h3" gutterBottom>
                  Statistics
                </Typography>
                <StatisticsChart />
              </Paper>
            </Grow>
          </Grid>
          <Grid item xs>
            <Grow
              in={checked}
              style={{ transformOrigin: '0 0 0' }}
              {...(checked ? { timeout: 1500 } : {})}
            >
              <Paper elevation={5} className={classes.paper}>
                <Typography variant="h3" gutterBottom>
                  Invoiced
                </Typography>
                <InvoicedChart />
              </Paper>
            </Grow>
          </Grid>
        </Grid>
        <Grid container spacing={16}>
          <Grid item xs>
            <Grow
              in={checked}
              style={{ transformOrigin: '0 0 0' }}
              {...(checked ? { timeout: 1500 } : {})}
            >
              <Paper elevation={5} className={classes.paper}>
                <Typography variant="h3" gutterBottom>
                  Outstanding
                </Typography>
                {/* <OutstandingChart /> */}
              </Paper>
            </Grow>
          </Grid>
          <Grid item xs>
            <Grow
              in={checked}
              style={{ transformOrigin: '0 0 0' }}
              {...(checked ? { timeout: 1500 } : {})}
            >
              <Paper elevation={5} className={classes.paper}>
                <Typography variant="h3" gutterBottom>
                  Past Due
                </Typography>
                {/* <PastDueChart /> */}
              </Paper>
            </Grow>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(Dashboard);
