import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import { withRouter } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';

import styles from './styles';
import InvoicedCard from './InvoicedCard';
import TopCards from './TopCards';
import { CompanyConsumer } from './../../contexts/CompanyContext';
import StatisticsCard from './StatisticsCard';
import TopBar from './TopBar';

class Dashboard extends Component {
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
            <>
              <CssBaseline />
              <div className={classes.root}>
                <Grid container justify="center">
                  <Grid
                    spacing={24}
                    alignItems="center"
                    justify="center"
                    container
                    className={classes.grid}
                  >
                    <TopBar checked={checked} />
                    <Grid container spacing={24} style={{ marginBottom: 20 }}>
                      <Grid item xs={12} md={4}>
                        <TopCards checked={checked} timeout={1000}>
                          Total Invoices
                        </TopCards>
                      </Grid>
                      <Grid item xs={12} md={4}>
                        <TopCards checked={checked} timeout={1400}>
                          Another Cool Info
                        </TopCards>
                      </Grid>
                      <Grid item xs={12} md={4}>
                        <TopCards checked={checked} timeout={1800}>
                          You Won't Believe it!
                        </TopCards>
                      </Grid>
                    </Grid>
                    <Grid container spacing={24} justify="center">
                      <Grid item xs={12} md={8}>
                        <InvoicedCard checked={checked} />
                      </Grid>
                      <Grid item xs={12} md={4}>
                        <StatisticsCard checked={checked} />
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </div>
            </>
          );
        }}
      </CompanyConsumer>
    );
  }
}

export default withRouter(withStyles(styles)(Dashboard));
