import React from 'react';

import { FetchUser } from '../graphQL/queries/users';

export const UserContext = React.createContext();

export class UserProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      _id: '',
      email: '',
      name: '',
      phoneNumber: '',
      companies: [],
      defaultCompany: ''
    };

    this.fetchUser = async userId => {
      const returnedData =
        '_id name email phoneNumber companies { _id name email phoneNumber address1 address2 zipCode city state premium premiumExpiresOn }';
      const result = await FetchUser(userId, returnedData);
      const { _id, email, name, phoneNumber, companies } = result.user;
      this.setState({
        _id,
        email,
        name,
        phoneNumber,
        companies
      });
    };

    this.fetchUserData = async () => {
      const returnedData = 'name email phoneNumber';
      const result = await FetchUser(this.state._id, returnedData);
      const { name, email, phoneNumber } = result.user;
      this.setState({
        name,
        email,
        phoneNumber
      });
    };
  }

  render() {
    const { fetchUser, fetchUserData } = this;
    const userState = this.state;
    return (
      <UserContext.Provider value={{ userState, fetchUser, fetchUserData }}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

export const UserConsumer = UserContext.Consumer;
