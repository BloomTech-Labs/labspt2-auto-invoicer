import React, { Component } from 'react'

import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import ViewUserDetails from './ViewUserDetails';
import EditUserDetails from './EditUserDetails';
import {UserConsumer} from '../../../contexts/UserContext'
import styles from '../styles'

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
    const { classes } = this.props;
    return (
      <UserConsumer>
        {({userState, fetchUserData}) => {
          return (
            <Paper elevation={5} className={classes.paper}>
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

export default withStyles(styles)(UserDetails); 
