import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {EditCompany} from '../../../graphQL/mutations/companies'

export default class EditCompanyDetails extends Component {
  constructor(props) {
    super(props)
    const {name, email, address_1, address_2, phone_num, city, state, postal_code} = this.props.company
    this.state = {
      name,
      email,
      address_1,
      address_2,
      phone_num,
      city,
      state,
      postal_code,
    }
  }

  editCompany = async (editedData, returnedData) => {
    const {_id} = this.props.company
    await EditCompany(_id, editedData, returnedData)
    await this.props.fetchUserCompanies()
    this.props.toggleView()
  }

  handleChange = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  render() {
    return (
      <div>
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
          value={this.state.email}/>
        <TextField 
          id={'phone_num'}
          label={'Phone Number'}
          fullWidth={true}
          placeholder={'Phone Number'}
          name={'phone_num'}
          onChange={this.handleChange}
          value={this.state.phone_num}/>
        <TextField 
          id={'address_1'}
          label={'Address_1'}
          fullWidth={true}
          placeholder={'Address_1'}
          name={'address_1'}
          onChange={this.handleChange}
          value={this.state.address_1}/>
        <TextField 
          id={'address_2'}
          label={'Address_2'}
          fullWidth={true}
          placeholder={'Address_2'}
          name={'address_2'}
          onChange={this.handleChange}
          value={this.state.address_2}/>
        <TextField 
          id={'city'}
          label={'City'}
          fullWidth={true}
          placeholder={'City'}
          name={'city'}
          onChange={this.handleChange}
          value={this.state.city}/>
        <TextField 
          id={'state'}
          label={'State'}
          fullWidth={true}
          placeholder={'State'}
          name={'state'}
          onChange={this.handleChange}
          value={this.state.state}/>
        <TextField 
          id={'postal_code'}
          label={'Postal Code'}
          fullWidth={true}
          placeholder={'Postal Code'}
          name={'postal_code'}
          onChange={this.handleChange}
          value={this.state.postal_code}/>
        <Button onClick={this.props.toggleView}>Cancel</Button>
        <Button onClick={() => this.editCompany(this.state, '_id')} >Save</Button>
      </div>
    )
  }
}
