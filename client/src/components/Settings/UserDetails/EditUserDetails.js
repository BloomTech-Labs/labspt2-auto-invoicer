import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';

export default class EditUserDetails extends Component {
  constructor(props) {
    super(props)
    const {name, email, phone_num} = this.props.userState
    this.state = {
      name: name,
      email: email,
      phone_num: phone_num
    }
  }

  render() {
    return (
      <div>
        <form className='user-form'>
          <TextField
            id={'name'}
            label={'Name'}
            fullWidth={true}
            placeholder={'Name'}
            // onChange={}
            value={this.state.name} />
            <TextField
              id={'email'}
              label={'Email'}
              fullWidth={true}
              placeholder={'Email'}
              // onChange={}
              value={this.state.email} />
            <TextField
              id={'phone_num'}
              label={'Phone Number'}
              fullWidth={true}
              placeholder={'Phone Number'}
              // onChange={}
              value={this.state.phone_num} />
        </form>
        <button
          onClick={this.props.toggleView}>cancel</button>
      </div>
    )
  }
}
