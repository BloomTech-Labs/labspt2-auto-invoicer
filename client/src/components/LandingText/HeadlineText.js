import React from "react";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  container: {
    paddingTop: 100,
    paddingBottom: 50,
    width: "100%",
    background: "#4fc878"
  },
  root: {
    width: "100%",
    maxWidth: 700,
    display: "flex",
    flexDirection: "column",
    margin: "0 auto",
    background: "#4fc878"
  }
};

const HeadlineText = props => {
  const { classes } = props;
  return (
    <div className={classes.container}>
      <div className={classes.root}>
        <Typography
          variant="h1"
          style={{
            fontFamily: "roboto",

            fontWeight: "600",
            color: "white"
          }}
        >
          Invoicing Solved
        </Typography>
        <br />
        <Typography variant="h4">Turn sales into cashflow.</Typography>
      </div>
    </div>
  );
};

export default withStyles(styles)(HeadlineText);
