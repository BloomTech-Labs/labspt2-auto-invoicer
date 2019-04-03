import React from 'react'

import { FetchCompany } from '../graphQL/queries/companies'

export const CompanyContext = React.createContext()

export class CompanyProvider extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
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
    this.fetchCompany = async (companyID) => {
      const returnedData = '_id name email phone_num address_1 address_2 city state postal_code country unlimited_tier credits users {_id name} customers {_id name}'
      const result = await FetchCompany(companyID, returnedData)
      const {company} = result
      this.setState({
        companyID: company._id,
        name: company.name,
        email: company.email,
        phone_num: company.phone_num,
        address_1: company.address_1,
        address_2: company.address_2,
        city: company.city,
        state: company.state,
        postal_code: company.postal_code,
        country: company.country,
        unlimited_tier: company.unlimited_tier,
        credits: company.credits,
        users: company.users,
        customers: company.customers,
        invoices: company.invoices,
      })
    }
  }

  render() {
    const {fetchCompany} = this
    const companyState = this.state
    return(
      <CompanyContext.Provider value={
        {companyState, fetchCompany}
      }>
        {this.props.children}
      </CompanyContext.Provider>
    )
  }
}

export const CompanyConsumer = CompanyContext.Consumer

