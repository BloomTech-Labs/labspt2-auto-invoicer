import React from 'react'

import {FetchUser} from '../graphQL/queries/users'
export const UserContext = React.createContext()

export class UserProvider extends React.Component {
  
  state = {
    userID: '',
    email: '',
    name: '',
    phone_num: '',
    companies: [],
  }
  //hardcoded userID, once we have the JWT set up, then we can grab
  //and pass in the userID to FetchUser()
  async componentDidMount() {
    const returned = '_id name email phone_num companies {_id name}'
    const result = await FetchUser("5c8d860b7fef7140f485950c", returned)
    const {user} = result
    this.setState({
      userID: user._id,
      email: user.email,
      name: user.name,
      phone_num: user.phone_num,
      companies: user.companies
    })
  }

  render() {
    return (
      <UserContext.Provider value={
        {...this.state}
        }>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

