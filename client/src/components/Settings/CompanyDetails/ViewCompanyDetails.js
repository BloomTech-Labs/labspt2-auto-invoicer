import React from 'react'
import Edit from '../EditIcon'

export default function ViewCompanyDetails(props) {
  const {name, email, address_1, address_2, phone_num, city, state, postal_code} = props.company
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
          <p>{phone_num}</p>
        </div>
        <div className='info'>
          <h2>Address_1: </h2>
          <p>{address_1}</p>
        </div>
        <div className='info'>
          <h2>Address_2: </h2>
          <p>{address_2}</p>
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
          <p>{postal_code}</p>
        </div>
      </div>
    </div>
  )
}
