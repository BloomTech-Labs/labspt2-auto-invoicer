import React from 'react';

// import components here
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import styles from './styles';

// import css here
// import './SettingsForm.css';

class SettingsForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      name: '',
      phone: ''
    };
  }
  changeHandler = e => {
    return this.setState({ [e.target.name]: e.target.value });
  };
  newPasswordSubmit = e => {
    e.preventDefault();
    const { newPassword, confirmPassword } = this.state;
    // change alerts when we start adding redux and axios calls
    newPassword === confirmPassword && newPassword.length > 7
      ? alert('Password Changed')
      : alert('Passwords do not match or invalid');
  };
  render() {
    const { name, email, phone } = this.state;
    const { classes } = this.props;
    return (
      <form className="form-column" onSubmit={this.newPasswordSubmit}>
        <TextField
          InputProps={{
            inputProps: {
              className: classes.textField
            }
          }}
          InputLabelProps={{
            className: classes.label
          }}
          style={{ fontSize: '2rem' }}
          label="Name"
          name="name"
          onChange={this.changeHandler}
          value={name}
          placeholder="john doe"
        />
        <TextField
          InputProps={{
            inputProps: {
              className: classes.textField
            }
          }}
          InputLabelProps={{
            className: classes.label
          }}
          style={{ fontSize: '2rem' }}
          label="Email"
          name="email"
          onChange={this.changeHandler}
          value={email}
          placeholder="testing@gmail.com"
        />
        <TextField
          InputProps={{
            inputProps: {
              className: classes.textField
            }
          }}
          InputLabelProps={{
            className: classes.label
          }}
          style={{ fontSize: '2rem' }}
          label="Phone"
          name="phone"
          onChange={this.changeHandler}
          value={phone}
          placeholder="6789995566"
          pattern="[0-9]{10}"
          maxLength="10"
        />
        <Button variant="contained" color="secondary">
          Save
        </Button>
      </form>
    );
  }
}

export default withStyles(styles)(SettingsForm);
