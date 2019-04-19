import React, { Component } from 'react'
import { UserConsumer } from '../../../contexts/UserContext';
import ViewCompanyDetails from './ViewCompanyDetails'
import EditCompanyDetails from './EditCompanyDetails'

import { Paper } from '@material-ui/core';

export default class index extends Component {
  state = {
    edit: false,
  }

  toggleView = () => {
    this.setState( prevState => ({
      edit: !prevState.edit
    }))
  }

  handleChange = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  render() {
    return (
      <UserConsumer>
        {({userState: {companies}}) => {
          return (
            <Paper>
              {!this.state.edit ?
              <ViewCompanyDetails companies={companies}/> :
              <EditCompanyDetails />}
            </Paper>
          )
        }}
      </UserConsumer>
    )
  }
}
