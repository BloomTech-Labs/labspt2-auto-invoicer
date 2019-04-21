import React from "react";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  container: {
    paddingTop: 20,
    paddingBottom: 20,
    width: "100%",
    background: "#a8e4bc"
  },
  root: {
    width: "100%",
    maxWidth: 700,
    display: "flex",
    flexDirection: "column",
    margin: "0 auto",
    background: "#a8e4bc"
  }
};

const LandingCTA = props => {
  const { classes } = props;
  return (
    <div className={classes.container}>
      <div className={classes.root}>
        <Typography variant="subtitle1">
          Create a free invoice on the go or sign-up and get unlimited invoices
          today!
        </Typography>
      </div>
    </div>
  );
};

export default withStyles(styles)(LandingCTA);
