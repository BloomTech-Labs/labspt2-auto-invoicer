import React from 'react'
import Edit from '../EditIcon'

export default function ViewUserDetails(props) {
  const {name, email, phone_num } = props.userState
  return (
    <div className='cardDetails'>
      <div className='card-header'>
        <h1>User Details</h1>
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
      </div>
    </div>
  )
}
