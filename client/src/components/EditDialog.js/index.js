import React, { Component, Fragment } from "react";
import { CompanyConsumer } from "../../contexts/CompanyContext";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import {
  Fab,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Tooltip
} from "@material-ui/core";
import Edit from "@material-ui/icons/EditOutlined";
import Form from "./Form";

//import Dialog from '@material-ui/core/Dialog';
// import DialogActions from '@material-ui/core/DialogActions';
// import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
// import DialogTitle from '@material-ui/core/DialogTitle';

export default class extends Component {
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

  toolTipSize = (component, placement, str) => {
    const theme = createMuiTheme({
      typography: {
        fontSize: 25,
        useNextVariants: true
      }
    });
    return (
      <MuiThemeProvider theme={theme}>
        <Tooltip placement={placement} title={str}>
          {component}
        </Tooltip>
      </MuiThemeProvider>
    );
  };

  render() {
    const { open } = this.state;
    // { muscles } = this.props;

    return (
      <CompanyConsumer>
        {({ companyState }) => {
          const { id } = this.props;
          const invoice = companyState.invoices.find(
            invoice => invoice._id === id
          );
          return (
            <Fragment>
              <Fab onClick={this.handleToggle} mini="true">
                {this.toolTipSize(<Edit />, "right", "New Edit")}
              </Fab>
              <Dialog open={open} onClose={this.handleToggle}>
                <DialogTitle>Edit Invoice Form</DialogTitle>
                <DialogContent>
                  <DialogContentText>
                    Please make your edits below.
                  </DialogContentText>
                  <Form invoice={invoice} />
                </DialogContent>
              </Dialog>
            </Fragment>
          );
        }}
      </CompanyConsumer>
    );
  }
}
