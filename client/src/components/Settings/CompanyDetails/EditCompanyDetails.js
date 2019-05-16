import React, { useContext, useState } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {EditCompany} from '../../../graphQL/mutations/companies'
import { withStyles } from '@material-ui/core';
import style from '../styles';
import UserContext from '../../../context/UserContext'

const EditCompanyDetails = props => {
  const context = useContext(UserContext)
  
  const {name, email, address1, address2, phoneNumber, city, state, zipCode} = context.company
  
  const [companyData, setCompanyData] = useState(
    {name, email, address1, address2, phoneNumber, city, state, zipCode}
  )

  const editCompany = async editedData => {
    await context.updateCompany(editedData)
    props.toggleView()
  }

  return (
    <form>
      <TextField
        id={'name'}
        label={'Name'}
        fullWidth={true}
        placeholder={'Name'}
        name={'name'}
        onChange={e => setCompanyData({...companyData, name: e.target.value})}
        value={companyData.name} />
      <TextField 
        id={'email'}
        label={'Email'}
        fullWidth={true}
        placeholder={'Email'}
        name={'email'}
        onChange={e => setCompanyData({...companyData, email: e.target.value})}
        value={companyData.email}/>
      <TextField 
        id={'phone_num'}
        label={'Phone Number'}
        fullWidth={true}
        placeholder={'Phone Number'}
        name={'phone_num'}
        onChange={e => setCompanyData({...companyData, phoneNumber: e.target.value})}
        value={companyData.phoneNumber}/>
      <TextField 
        id={'address_1'}
        label={'Address_1'}
        fullWidth={true}
        placeholder={'Address_1'}
        name={'address_1'}
        onChange={e => setCompanyData({...companyData, address1: e.target.value})}
        value={companyData.address1}/>
      <TextField 
        id={'address_2'}
        label={'Address_2'}
        fullWidth={true}
        placeholder={'Address_2'}
        name={'address_2'}
        onChange={e => setCompanyData({...companyData, address2: e.target.value})}
        value={companyData.address2}/>
      <TextField 
        id={'city'}
        label={'City'}
        fullWidth={true}
        placeholder={'City'}
        name={'city'}
        onChange={e => setCompanyData({...companyData, city: e.target.value})}
        value={companyData.city}/>
      <TextField 
        id={'state'}
        label={'State'}
        fullWidth={true}
        placeholder={'State'}
        name={'state'}
        onChange={e => setCompanyData({...companyData, state: e.target.value})}
        value={companyData.state}/>
      <TextField 
        id={'postal_code'}
        label={'Postal Code'}
        fullWidth={true}
        placeholder={'Postal Code'}
        name={'postal_code'}
        onChange={e => setCompanyData({...companyData, zipCode: e.target.value})}
        value={companyData.zipCode}/>
      <Button onClick={props.toggleView}>Cancel</Button>
      <Button onClick={() => editCompany(companyData)} >Save</Button>
    </form>
  )
}

export default withStyles(style)(EditCompanyDetails)