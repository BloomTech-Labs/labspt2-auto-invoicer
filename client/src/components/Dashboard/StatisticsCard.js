import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Zoom from '@material-ui/core/Zoom';

import styles from './styles';
import StatisticsChart from './StatisticsChart';

class StatisticsCard extends React.Component {
  constructor(props) {
    super(props);
    this.cardRef = React.createRef();
  }

  render() {
    const { checked, classes, unpaid, late, collected } = this.props;
    console.log('inside the card', unpaid, late, collected);
    return (
      <Zoom
        in={checked}
        style={{
          transitionDelay: checked ? '1000ms' : '0ms'
        }}
      >
        <Paper className={classes.paper} style={{ position: 'relative' }}>
          <div ref={this.cardRef} className={classes.statistics}>
            <Typography variant="h5" gutterBottom>
              Statistics
            </Typography>
            <StatisticsChart
              cardRef={this.cardRef}
              unpaid={unpaid}
              late={late}
              collected={collected}
            />
          </div>
        </Paper>
      </Zoom>
    );
  }
}

export default withStyles(styles)(StatisticsCard);
