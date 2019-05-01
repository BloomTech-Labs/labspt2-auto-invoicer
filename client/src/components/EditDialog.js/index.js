import React, { Component, Fragment } from "react";
import  {withStyles} from "@material-ui/core/styles";
import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Tooltip
} from "@material-ui/core";
import Form from "./Form";
import styles from './styles';

//import Dialog from '@material-ui/core/Dialog';
// import DialogActions from '@material-ui/core/DialogActions';
// import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
// import DialogTitle from '@material-ui/core/DialogTitle';

class EditDialog extends Component {
  state = {
    open: false
  };

  handleToggle = () => {
    this.setState({
      open: !this.state.open
    });
  };

  handleFormSubmit = exercise => {
    this.handleToggle();

    this.props.onCreate(exercise);
  };

  render() {
    const { classes } = this.props;
    console.log(classes);
    const { open } = this.state;
    return (
      <Fragment>
        <Tooltip
          title="Edit Amount"
          placement="right"
          classes={{
            tooltip: classes.tooltip
          }}
        >
          <div
            onClick={this.handleToggle}
            className={classes.shortcutsCircle}
          >
            <i
              className="material-icons"
              style={{
                color: "#4fc878",
                fontSize: 36
              }}
            >
              edit
            </i>
          </div>
        </Tooltip>
        <Dialog open={open} onClose={this.handleToggle}>
          <DialogTitle>Update Payment</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please make updates to your invoice here
            </DialogContentText>
            <Form invoice={this.props.invoice} />
          </DialogContent>
        </Dialog>
      </Fragment>
    );
  }
}
export default withStyles(styles)(EditDialog);
