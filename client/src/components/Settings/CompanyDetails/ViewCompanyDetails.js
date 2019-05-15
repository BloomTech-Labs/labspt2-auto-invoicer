import React, {useContext} from 'react'
import Edit from '../EditIcon'

import style from '../styles'

import { withStyles } from '@material-ui/core/styles';
import UserContext from '../../../context/UserContext'

const ViewCompanyDetails = props => {
  const context = useContext(UserContext)
  const {name, email, address1, address2, phoneNumber, city, state, zipCode} = context.company
  return (
    <div className='cardDetails'>
      <div className='card-header'>
        <h1>Company Details</h1>
        <div onClick={props.toggleView} className='edit'>
          <Edit />
        </div>
      </div>
      <div className='infoContainer'>
        <div className='info'>
          <h2>Name: </h2>
          <p>{name}</p>
        </div>
        <div className='info'>
          <h2>Email: </h2>
          <p>{email}</p>
        </div>
        <div className='info'>
          <h2>Phone Number: </h2>
          <p>{phoneNumber}</p>
        </div>
        <div className='info'>
          <h2>Address_1: </h2>
          <p>{address1}</p>
        </div>
        <div className='info'>
          <h2>Address_2: </h2>
          <p>{address2}</p>
        </div>
        <div className='info'>
          <h2>City: </h2>
          <p>{city}</p>
        </div>
        <div className='info'>
          <h2>State: </h2>
          <p>{state}</p>
        </div>
        <div className='info'>
          <h2>Postal Code: </h2>
          <p>{zipCode}</p>
        </div>
      </div>
    </div>
  )
}

export default withStyles(style)(ViewCompanyDetails)