import React, { useReducer, useEffect } from 'react';
import axios from 'axios';

import UserContext from './UserContext';

import { userReducer, GET_USER, GET_COMPANIES, GET_UPDATED_USER_DATA } from './reducers';
import { userData, companyData } from './graphql';
import { toUpdateUser } from './mutations'

const GlobalState = props => {
  const [userState, dispatch] = useReducer(userReducer, {
    user: {
      _id: '',
      email: '',
      name: '',
      phoneNumber: '',
      companies: [],
      invoices: [],
      defaultCompany: '',
      premium: '',
      premiumExpiresOn: '',
      newAccount: ''
    }
  });

  const getUser = async () => {
    const user = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/user`, {
      withCredentials: true
    });
    const userQuery = {
      query: `
        query {
          user(userId: "${user.data.userId}") {
            ${userData}
          }
        } 
      `
    };
    const userDetails = await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/graphql`,
      userQuery
    );
    dispatch({ type: GET_USER, user: userDetails.data.data.user });
  };

  const getCompanies = async () => {
    const companiesQuery = {
      query: `
        query {
          user(userId: "${userState.user._id}") {
            companies {
              ${companyData}
            }
          }
        }
      `
    };
    const companies = await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/graphql`,
      companiesQuery
    );
    dispatch({
      type: GET_COMPANIES,
      companies: companies.data.data.user.companies
    });
  };

  const updateUser = async (editedData) => {
    const user = await toUpdateUser(userState.user._id, editedData);
    console.log('updated data:', user)
    dispatch({
      type: GET_UPDATED_USER_DATA,
      user: user.data.data.editUser
    })
  }

  useEffect(() => {
    console.log('[userState in GlobalState]: ', userState);
  }, [userState]);

  return (
    <UserContext.Provider
      value={{ user: userState.user, getUser, getCompanies, updateUser }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default GlobalState;
