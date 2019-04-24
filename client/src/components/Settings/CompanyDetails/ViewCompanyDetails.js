import React from 'react'
import Edit from '../EditIcon'

export default function ViewCompanyDetails(props) {
  const {name, email, address_1, address_2, phone_num, city, state, postal_code} = props.company
  return (
    <div>
      <div className='card-header'>
        <h1>Company Details</h1>
        <div onClick={props.toggleView} className='edit'>
          <Edit />
        </div>
      </div>
      <h2>Name</h2>
      <p>{name}</p>
      <h2>Email</h2>
      <p>{email}</p>
      <h2>Phone Number</h2>
      <p>{phone_num}</p>
      <h2>Address_1</h2>
      <p>{address_1}</p>
      <h2>Address_2</h2>
      <p>{address_2}</p>
      <h2>City</h2>
      <p>{city}</p>
      <h2>State</h2>
      <p>{state}</p>
      <h2>Postal Code</h2>
      <p>{postal_code}</p>
    </div>
  )
}
