import React from "react";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

import style from "./styles";

const HeadlineText = props => {
  const { classes } = props;
  return (
    <div className={classes.container}>
      <div className={classes.root}>
        <Typography variant="h1" style={{ color: "white" }}>
          Invoicing Solved
        </Typography>
        <br />
        <Typography variant="h2" style={{ color: "#8bc34a" }}>
          Turn sales into cashflow.
        </Typography>
      </div>
    </div>
  );
};

export default withStyles(style)(HeadlineText);
