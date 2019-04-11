import React from "react";

//import { withStyles } from "@material-ui/core/styles";

//import styles from "./styles";
import { TextField } from "../../../node_modules/@material-ui/core";

class InvoiceDescription extends React.Component {
  state = {
    name: ""
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  render() {
    return (
      <TextField
        id="filled-name"
        label="Invoice Description"
        //className={classes.textField}
        value={this.state.name}
        onChange={this.handleChange("name")}
        margin="normal"
        variant="filled"
      />
    );
  }
}

export default InvoiceDescription;
