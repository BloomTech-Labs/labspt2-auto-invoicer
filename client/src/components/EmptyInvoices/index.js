import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import Grow from "@material-ui/core/Grow";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { ReactComponent as Investing } from "../../assets/undraw_investing_7u74.svg";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import styles from "./style";

// import css here
import "./EmptyInvoices.css";

class EmptyInvoices extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { classes, userID } = this.props;
    return (
      <Grow in={true} {...{ timeout: 1300 }}>
        <Paper
          style={{
            border: "2px solid #8bc34a",
            height: "490px",
            marginBottom: "20px"
          }}
          className={classes.root}
        >
          <AppBar style={{ backgroundColor: "#8bc34a" }} position="static">
            <Toolbar>
              <Typography variant="h2" color="inherit" noWrap>
                Invoices
              </Typography>
            </Toolbar>
          </AppBar>
          <div className="align">
            <Link to={`/user/${userID}/invoice/create`}>
              <p className="topText">
                Your Path To Financial Success Starts Here.
              </p>
              <Investing className="emptyInvoices" />
              <p className="btmText">Click Now To Create Your First Invoice.</p>
            </Link>
          </div>
        </Paper>
      </Grow>
    );
  }
}

export default withStyles(styles)(EmptyInvoices);
