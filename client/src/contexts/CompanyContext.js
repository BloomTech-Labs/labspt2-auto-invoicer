import React from 'react';

import { FetchCompany } from '../graphQL/queries/companies';

export const CompanyContext = React.createContext();

export class CompanyProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      _id: '',
      name: '',
      email: '',
      phoneNumber: '',
      address1: '',
      address2: '',
      zipCode: '',
      city: '',
      state: '',
      premium: false,
      premiumExpiresOn: '',
      users: [],
      customers: [],
      invoices: []
    };
    const companyData = `
      _id
      name
      email
      phoneNumber
      address1
      address2
      zipCode
      city
      state
      premium
      premiumExpiresOn
    `;
    const usersData = `
      users {
        _id
        name
      }
    `;
    const customersData = `
      customers {
        _id
        name
        email
        phoneNumber
        address1
        address2
        zipCode
        city
        state
      }
    `;
    const invoicesData = `
      invoices {
        _id
        createdBy
        number
        description
        terms
        date
        dueDate
        company {
          _id
          name
          email
          phoneNumber
          address1
          address2
          zipCode
          city
          state
        }
        customer {
          _id
          name
          email
          phoneNumber
          address1
          address2
          zipCode
          city
          state
        }
        subtotal
        discount
        tax
        shipping
        total
        balance
        notes
        paid
      }
    `;
    this.fetchCompany = async companyId => {
      const returnedData = `${companyData} ${usersData} ${customersData} ${invoicesData}`;
      const result = await FetchCompany(companyId, returnedData);
      const { company } = result;
      this.setState({
        _id: company._id,
        name: company.name,
        email: company.email,
        phoneNumber: company.phoneNumber,
        address1: company.address1,
        address2: company.address2,
        zipCode: company.zipCode,
        city: company.city,
        state: company.state,
        premium: company.premium,
        premiumExpiresOn: company.premiumExpiresOn,
        users: company.users,
        customers: company.customers,
        invoices: company.invoices
      });
    };

    this.fetchInvoices = async () => {
      const returnedData = `${invoicesData}`;
      const result = await FetchCompany(this.state._id, returnedData);
      const { company } = result;
      this.setState({ invoices: company.invoices });
    };

    this.fetchUsers = async () => {
      const result = await FetchCompany(this.state._id, usersData);
      const { company } = result;
      this.setState({ users: company.users });
    };

    this.fetchCustomers = async () => {
      const result = await FetchCompany(this.state._id, customersData);
      const { company } = result;
      this.setState({ customers: company.customers });
    };

    this.fetchCompanyData = async companyId => {
      const result = await FetchCompany(companyId, companyData);
      const { company } = result;
      this.setState({
        _id: company._id,
        name: company.name,
        email: company.email,
        phoneNumber: company.phoneNumber,
        address1: company.address1,
        address2: company.address2,
        zipCode: company.zipCode,
        city: company.city,
        state: company.state,
        premium: company.premium,
        premiumExpiresOn: company.premiumExpiresOn,
        users: company.users,
        customers: company.customers,
        invoices: company.invoices
      });
    };

    this.fetchPlanOrCredits = async companyId => {
      const plan = `premium`;
      const result = await FetchCompany(companyId, plan);
      const { company } = result;
      this.setState({
        premium: company.premium
      });
    };
  }

  render() {
    const {
      fetchCompany,
      fetchCustomers,
      fetchInvoices,
      fetchUsers,
      fetchPlanOrCredits
    } = this;
    const companyState = this.state;
    return (
      <CompanyContext.Provider
        value={{
          companyState,
          fetchCompany,
          fetchCustomers,
          fetchInvoices,
          fetchUsers,
          fetchPlanOrCredits
        }}
      >
        {this.props.children}
      </CompanyContext.Provider>
    );
  }
}

export const CompanyConsumer = CompanyContext.Consumer;
