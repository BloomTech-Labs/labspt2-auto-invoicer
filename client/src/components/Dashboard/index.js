import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Grow from '@material-ui/core/Grow';

import styles from './styles';

import InvoicedChart from './InvoicedChart';
import StatisticsChart from './StatisticsChart';
import { DashIMG } from './DashIMG';
import { CompanyConsumer } from '../../contexts/CompanyContext';

class Dashboard extends React.Component {
  state = { checked: false };
  componentDidMount() {
    setTimeout(() => this.setState({ checked: true }), 800);
  }
  render() {
    const { classes } = this.props;
    const { checked } = this.state;

    return (
      <CompanyConsumer>
        {({ companyState }) => {
          console.log(companyState);
          return (
            <div className={classes.root}>
              {/* <Typography className={classes.title} variant="h2">
                Dashboard
              </Typography> */}
              <Grid container spacing={16}>
                <Grid container item>
                  <Grid item xs>
                    <Grow
                      in={checked}
                      style={{ transformOrigin: '0 0 0' }}
                      {...(checked ? { timeout: 1000 } : {})}
                    >
                      <Paper elevation={3} className={classes.image}>
                        <Typography variant="h1">Dashboard</Typography>
                        <DashIMG />
                      </Paper>
                    </Grow>
                  </Grid>
                  <Grid container item>
                    <Grid md={8} item xs>
                      <Grow in={checked}>
                        <Paper elevation={3} className={classes.chart}>
                          <Typography variant="h3" gutterBottom>
                            Invoiced
                          </Typography>
                          <InvoicedChart />
                        </Paper>
                      </Grow>
                    </Grid>
                    <Grid md={4} item xs>
                      <Grow
                        in={checked}
                        style={{ transformOrigin: '0 0 0' }}
                        {...(checked ? { timeout: 1200 } : {})}
                      >
                        <Paper elevation={3} className={classes.paper}>
                          <Typography variant="h3" gutterBottom>
                            Statistics
                          </Typography>
                          <StatisticsChart />
                        </Paper>
                      </Grow>
                    </Grid>
                  </Grid>
                  {/* <Grid item xs>
              <Grow
                in={checked}
                style={{ transformOrigin: '0 0 0' }}
                {...(checked ? { timeout: 1500 } : {})}
              >
                <Paper elevation={5} className={classes.paper}>
                  <Typography variant="h3" gutterBottom>
                    Past Due
                  </Typography>
                </Paper>
              </Grow>
            </Grid> */}
                </Grid>
                <Grid md={4} sm={12} container item spacing={16} />
              </Grid>
            </div>
          );
        }}
      </CompanyConsumer>
    );
  }
}

export default withStyles(styles)(Dashboard);
