import React, { useReducer, useEffect } from 'react';
import axios from 'axios';

import UserContext from './UserContext';

import { userReducer, GET_USER, GET_COMPANIES, GET_COMPANY, GET_UPDATED_USER_DATA } from './reducers';
import { userData, companyData } from './graphql';
import { toUpdateUser } from './mutations'

const GlobalState = props => {
  const [state, dispatch] = useReducer(userReducer, {
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
    },
    company: {
      _id: '',
      name:'',
      email:'',
      phoneNumber: '',
      address1:'',
      address2:'',
      zipCode: '',
      city: '',
      state: '',
      customers: [],
      items: [],
      invoices: [],
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
          user(userId: "${state.user._id}") {
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

  const getCompany = async (companyId) => {
    const companyQuery = {
      query: `
        query {
          company(companyId: "${companyId}") {
            ${companyData}
          }
        }
      `
    };
    const company = await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/graphql`,
      companyQuery
    );
    console.log('company data', company)
    dispatch({
      type: GET_COMPANY,
      company: company.data.data.company
    })
  }

  const updateUser = async (editedData) => {
    const user = await toUpdateUser(state.user._id, editedData);
    console.log('updated data:', user)
    dispatch({
      type: GET_UPDATED_USER_DATA,
      user: user.data.data.editUser
    })
  }

  useEffect(() => {
    console.log('[state in GlobalState]: ', state);
  }, [state]);

  return (
    <UserContext.Provider
      value={{ user: state.user, company: state.company, getUser, getCompanies, getCompany, updateUser }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default GlobalState;
