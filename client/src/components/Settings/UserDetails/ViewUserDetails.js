import React from 'react'

export default function ViewUserDetails(props) {
  const {name, email, phone_num } = props.userState
  return (
    <div className='user-details'>
      <h2>Name</h2>
        <p>
          {name}
        </p>
        <h2>Email</h2>
        <p>
          {email}
        </p>
        <h2>Phone Number</h2>
        <p>
          {phone_num}
        </p>
        <button onClick={props.toggleView}>edit</button>
    </div>
  )
}
