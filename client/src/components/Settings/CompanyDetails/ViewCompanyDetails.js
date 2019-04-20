import React from 'react'
import Edit from '../EditIcon'

export default function ViewCompanyDetails(props) {
  const {name, email, address_1, address_2, phone_num, city, state, postal_code} = props.company
  return (
    <div>
      <div className='card-header'>
        <h1>User Details</h1>
        <div onClick={props.toggleView} className='edit'>
          <Edit />
        </div>
      </div>
      <h2>name</h2>
      <p>{name}</p>
      <h2>email</h2>
      <p>{email}</p>
      <h2>phone Number</h2>
      <p>{phone_num}</p>
      <h2>address_1</h2>
      <p>{address_1}</p>
      <h2>address_2</h2>
      <p>{address_2}</p>
      <h2>city</h2>
      <p>{city}</p>
      <h2>state</h2>
      <p>{state}</p>
      <h2>postal code</h2>
      <p>{postal_code}</p>
    </div>
  )
}
