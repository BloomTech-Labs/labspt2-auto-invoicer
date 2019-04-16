import React, { Component } from 'react'

import Paper from '@material-ui/core/Paper';
import ViewUserDetails from './ViewUserDetails';
import EditUserDetails from './EditUserDetails';
import {UserConsumer} from '../../../contexts/UserContext'

export class UserDetails extends Component {
  state = {
    edit: false
  }

  toggleView = () => {
    this.setState( prevState => ({
      edit: !prevState.edit
    }))
  }

  handleChange = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit = e => {

  }
  render() {
    return (
      <UserConsumer>
        {({userState, fetchUserData}) => {
          return (
            <Paper className='user-card'>
              {!this.state.edit ? 
              <ViewUserDetails 
                toggleView={this.toggleView}
                userState={userState} /> :
              <EditUserDetails 
                toggleView={this.toggleView} 
                userState={userState}
                fetchUserData={fetchUserData} /> }
            </Paper>
          )
        }}
      </UserConsumer>
    )
  }
}

export default UserDetails
