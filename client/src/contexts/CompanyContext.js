import React from 'react'

import { FetchCompany } from '../graphQL/queries/companies'

export const CompanyContext = React.createContext()

export class CompanyProvider extends React.Component {

  state = {
    companyID: '',
    name: '',
    email: '',
    phone_num: '',
    address_1: '',
    address_2: '',
    city: '',
    state: '',
    postal_code: '',
    country: '',
    unlimited_tier: false,
    credits: 0,
    users: [],
    customers: [],
    invoices: [],
  }

  async componentDidMount() {
    
  }

  render() {
    return(
      <CompanyContext.Provider value={
        {...this.state}
      }>
        {this.props.children}
      </CompanyContext.Provider>
    )
  }
}

