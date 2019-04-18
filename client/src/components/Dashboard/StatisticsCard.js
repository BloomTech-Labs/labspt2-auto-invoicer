import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Zoom from '@material-ui/core/Zoom';

import styles from './styles';
import StatisticsChart from './StatisticsChart';

const StatisticsCard = props => {
  const { checked, classes } = props;
  return (
    <Zoom
      in={checked}
      style={{
        transitionDelay: checked ? '1000ms' : '0ms'
      }}
    >
      <Paper className={classes.paper} style={{ position: 'relative' }}>
        <div className={classes.statistics}>
          <Typography variant="h3" gutterBottom>
            Statistics
          </Typography>
          <StatisticsChart />
        </div>
      </Paper>
    </Zoom>
  );
};

export default withStyles(styles)(StatisticsCard);
