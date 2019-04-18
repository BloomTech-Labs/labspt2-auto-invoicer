import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Slide from '@material-ui/core/Slide';
import Button from '@material-ui/core/Button';

import styles from './styles';

const TopBar = props => {
  const { checked, classes } = props;
  return (
    <Grid item xs={12}>
      <div className={classes.topBar}>
        <div className={classes.block}>
          <Slide direction="right" in={checked} mountOnEnter unmountOnExit>
            <Typography variant="h2" gutterBottom>
              Dashboard
            </Typography>
          </Slide>
        </div>
        <div>
          <Slide
            direction="left"
            in={checked}
            mountOnEnter
            unmountOnExit
            style={{
              transitionDelay: checked ? '1000ms' : '0ms'
            }}
          >
            <Button variant="outlined" className={classes.outlinedButtom}>
              New Invoice!
            </Button>
          </Slide>
        </div>
      </div>
    </Grid>
  );
};

export default withStyles(styles)(TopBar);
