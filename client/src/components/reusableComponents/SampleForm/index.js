import React, { Component } from "react";
// import Grid from "@material-ui/core/Grid";
// import TextField from "@material-ui/core/TextField";

class index extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: ""
    };
  }

  changeHandler = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
  };

  render() {
    return (
      //   <Grid container spacing={14}>

      <form>
        <input
          id="firstName"
          name="firstName"
          placeholder="First Name"
          value={this.state.firstName}
          onChange={event => this.changeHandler(event)}
        />
        <br />
        <input
          id="lastName"
          name="lastName"
          placeholder="Last Name"
          value={this.state.lastName}
          onChange={event => this.changeHandler(event)}
        />
        <button onClick={event => this.onSubmit(event)}>Submit</button>
      </form>
      //   </Grid>
    );
  }
}

export default index;
