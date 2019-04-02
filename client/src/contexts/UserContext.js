import React from 'react'

import {FetchUser} from '../graphQL/queries/users'

export const UserContext = React.createContext()

export class UserProvider extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      userID: '',
      email: '',
      name: '',
      phone_num: '',
      companies: [],
      defaultCompany: ''
    };

    this.fetchUser = async (userID) => {
      const returnedData = '_id name email phone_num companies {_id name}'
      const result = await FetchUser(userID, returnedData)
      const {_id, email, name, phone_num, companies} = result.user
      this.setState({
        userID: _id,
        email,
        name, phone_num, 
        companies
      })
  }
  
  }

  render() {
    const {fetchUser} = this;
    const userState = this.state
    return (
      <UserContext.Provider value={
        {userState, fetchUser}
        }>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

export const UserConsumer = UserContext.Consumer;
