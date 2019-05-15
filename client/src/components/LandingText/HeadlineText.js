import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import style from './styles'

const HeadlineText = props => {
  const { classes } = props;
  return (
    <div className={classes.container}>
      <div className={classes.root}>
        <Typography
          variant="h1"
          className={classes.headlineText}
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

export default withStyles(style)(HeadlineText);
