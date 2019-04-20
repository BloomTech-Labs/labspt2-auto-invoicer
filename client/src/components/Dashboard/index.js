import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import { withRouter } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Tooltip from '@material-ui/core/Tooltip';

import styles from './styles';
import InvoicedCard from './InvoicedCard';
import TopCards from './TopCards';
import { CompanyConsumer } from './../../contexts/CompanyContext';
import StatisticsCard from './StatisticsCard';
import TopBar from './TopBar';
import { Typography } from '@material-ui/core';

class Dashboard extends Component {
  state = {
    checked: false
  };
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
                          <div style={{ display: 'flex' }}>
                            <div className={classes.iconContainer}>
                              <Tooltip
                                title="Invoices"
                                classes={{ tooltip: classes.tooltip }}
                              >
                                <div className={classes.invoicesCircle}>
                                  <icon
                                    className="material-icons"
                                    style={{ color: '#0d47a1' }}
                                  >
                                    file_copy
                                  </icon>
                                </div>
                              </Tooltip>
                            </div>
                            <div className={classes.middleInfo}>
                              <span className={classes.span}>{124}</span>
                              <Typography variant="subtitle1">
                                Total Invoices
                              </Typography>
                            </div>
                            <Tooltip
                              title="Compared to Last Month"
                              classes={{ tooltip: classes.tooltip }}
                            >
                              <div className={classes.percentageComparison}>
                                <icon
                                  className="material-icons"
                                  style={{ color: '#00897b', marginRight: 12 }}
                                >
                                  arrow_upward
                                </icon>
                                <span className={classes.percentagePos}>
                                  12.05%
                                </span>
                              </div>
                            </Tooltip>
                          </div>
                        </TopCards>
                      </Grid>
                      <Grid item xs={12} md={4}>
                        <TopCards checked={checked} timeout={1400}>
                          <div style={{ display: 'flex' }}>
                            <div className={classes.iconContainer}>
                              <Tooltip
                                title="Users"
                                classes={{ tooltip: classes.tooltip }}
                              >
                                <div className={classes.usersCircle}>
                                  <icon
                                    className="material-icons"
                                    style={{ color: '#e65100' }}
                                  >
                                    supervisor_account
                                  </icon>
                                </div>
                              </Tooltip>
                            </div>
                            <div className={classes.middleInfo}>
                              <span className={classes.span}>{9}</span>
                              <Typography variant="subtitle1">
                                New Users
                              </Typography>
                            </div>
                            <Tooltip
                              title="Compared to Last Month"
                              classes={{ tooltip: classes.tooltip }}
                            >
                              <div className={classes.percentageComparison}>
                                <icon
                                  className="material-icons"
                                  style={{ color: '#ff5722', marginRight: 12 }}
                                >
                                  arrow_downward
                                </icon>
                                <span className={classes.percentageNeg}>
                                  3.89%
                                </span>
                              </div>
                            </Tooltip>
                          </div>
                        </TopCards>
                      </Grid>
                      <Grid item xs={12} md={4}>
                        <TopCards checked={checked} timeout={1800}>
                          <div className={classes.shortcuts}>
                            <Tooltip
                              title="Create a New Invoice"
                              classes={{ tooltip: classes.tooltip }}
                            >
                              <div className={classes.shortcutsCircle}>
                                <icon
                                  className="material-icons"
                                  style={{ color: '#e65100', fontSize: 36 }}
                                >
                                  note_add
                                </icon>
                              </div>
                            </Tooltip>
                            <Tooltip
                              title="Add a Payment"
                              classes={{ tooltip: classes.tooltip }}
                            >
                              <div className={classes.shortcutsCircle}>
                                <icon
                                  className="material-icons"
                                  style={{ color: '#e65100', fontSize: 36 }}
                                >
                                  attach_money
                                </icon>
                              </div>
                            </Tooltip>
                            <Tooltip
                              title="Add a New Customer"
                              classes={{ tooltip: classes.tooltip }}
                            >
                              <div className={classes.shortcutsCircle}>
                                <icon
                                  className="material-icons"
                                  style={{ color: '#e65100', fontSize: 36 }}
                                >
                                  person_add
                                </icon>
                              </div>
                            </Tooltip>
                            <Tooltip
                              title="Add a New Item"
                              classes={{ tooltip: classes.tooltip }}
                            >
                              <div className={classes.shortcutsCircle}>
                                <icon
                                  className="material-icons"
                                  style={{ color: '#e65100', fontSize: 36 }}
                                >
                                  add_to_queue
                                </icon>
                              </div>
                            </Tooltip>
                          </div>
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
