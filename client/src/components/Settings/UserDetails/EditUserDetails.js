import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {EditUser} from '../../../graphQL/mutations/users'

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

  editUser = async (editedData, returnedData) => {
    const {userID} = this.props.userState
    await EditUser(userID, editedData, returnedData)
    await this.props.fetchUserData()
    this.props.toggleView()
  }

  handleChange = e => {
    this.setState({[e.target.name]: e.target.value})
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
            name={'name'}
            onChange={this.handleChange}
            value={this.state.name} />
            <TextField
              id={'email'}
              label={'Email'}
              fullWidth={true}
              placeholder={'Email'}
              name={'email'}
              onChange={this.handleChange}
              value={this.state.email} />
            <TextField
              id={'phone_num'}
              label={'Phone Number'}
              fullWidth={true}
              placeholder={'Phone Number'}
              name={'phone_num'}
              onChange={this.handleChange}
              value={this.state.phone_num} />
        </form>
        <Button
          onClick={this.props.toggleView}>
          cancel
        </Button>
        <Button
          onClick={() => this.editUser(this.state, '_id')}>
          save
        </Button>
      </div>
    )
  }
}
