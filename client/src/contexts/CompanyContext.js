import React from "react";

import { FetchCompany } from "../graphQL/queries/companies";

export const CompanyContext = React.createContext();

export class CompanyProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      companyID: "",
      name: "",
      email: "",
      phone_num: "",
      address_1: "",
      address_2: "",
      city: "",
      state: "",
      postal_code: "",
      country: "",
      unlimited_tier: false,
      credits: 0,
      users: [],
      customers: [],
      invoices: []
    };
    const companyData = `
    _id 
    name 
    email 
    phone_num 
    address_1
    address_2 
    city 
    state 
    postal_code 
    country 
    unlimited_tier 
    credits`;
    const usersData = `users {_id name}`;
    const customersData = `customers {_id name}`;
    const invoicesData = `invoices {
      _id
      invoiceNumber 
      companyName 
      userName 
      invoiceDescription 
      addressFrom 
      addressTo 
      cityTo 
      stateTo 
      zipCodeTo 
      emailTo 
      selectedDate 
      invoiceDueDate 
      balanceDue 
      subtotal 
      discount
      tax 
      shipping 
      total 
      amountPaid 
      notes 
      terms
    }`;
    this.fetchCompany = async companyID => {
      const returnedData = `${companyData} ${usersData} ${customersData} ${invoicesData}`;
      const result = await FetchCompany(companyID, returnedData);
      const { company } = result;
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
        invoices: company.invoices
      });
    };

    this.fetchInvoices = async () => {
      const returnedData = `credits ${invoicesData}`;
      const result = await FetchCompany(this.state.companyID, returnedData);
      const { company } = result;
      this.setState({ invoices: company.invoices, credits: company.credits });
    };

    this.fetchUsers = async () => {
      const result = await FetchCompany(this.state.companyID, usersData);
      const { company } = result;
      this.setState({ users: company.users });
    };

    this.fetchCustomers = async () => {
      const result = await FetchCompany(this.state.companyID, customersData);
      const { company } = result;
      this.setState({ customers: company.customers });
    };

    this.fetchPlanOrCredits = async companyID => {
      const plan = `unlimited_tier credits`;
      const result = await FetchCompany(companyID, plan);
      const { company } = result;
      this.setState({
        credits: company.credits,
        unlimited_tier: company.unlimited_tier
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
