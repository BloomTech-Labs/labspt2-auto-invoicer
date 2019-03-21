const {
  buildSchema
} = require('graphql');

module.exports = buildSchema(`
type User {
  _id: ID!
  email: String!
  password: String
  name: String!
  phone_num: String
  country_code: String
  address_1: String
  address_2: String
  city: String
  state: String
  postal_code: String
  country: String
  companies: [Company!]
  invoices: [Invoice!]
}

type Company {
  _id: ID!
  name: String!
  email: String!
  phone_num: String!
  country_code: String!
  address_1: String!
  address_2: String
  city: String!
  state: String!
  postal_code: String!
  country: String!
  unlimited_tier: Boolean!
  credits: Int!
  users: [User!]!
  customers: [Customer!]
  invoices: [Invoice!]
}

type Customer {
  _id: ID!
  name: String!
  email: String!
  phone_num: String!
  country_code: String!
  address_1: String!
  address_2: String
  city: String!
  state: String!
  postal_code: String!
  country: String!
  companies: [Company!]!
  invoices: [Invoice!]
}

type Invoice {
  _id: ID!
  createdBy: ID!
  invoice_num: String!
  company_id: ID!
  customer_id: ID!
}

input InvoiceInput {
  invoice_num: String!
}

type Item {
  _id: ID!
  description: String!
  quantity: Int!
  rate: Float!
  amount: Int!
}

input CompanyInput {
  name: String!
  email: String!
  phone_num: String!
  country_code: String!
  address_1: String!
  address_2: String
  city: String!
  state: String!
  postal_code: String!
  country: String!
}

input EditCompanyInput {
  _id: ID
  name: String
  email: String
  phone_num: String
  country_code: String
  address_1: String
  address_2: String
  city: String
  state: String
  postal_code: String
  country: String
}

input UserInput {
  email: String!
  password: String!
  name: String!
  phone_num: String!
  country_code: String!
  address_1: String!
  address_2: String
  city: String!
  state: String!
  postal_code: String!
  country: String!
}

input EditUserInput {
  email: String
  password: String
  name: String
  phone_num: String
  country_code: String
  address_1: String
  address_2: String
  city: String
  state: String
  postal_code: String
  country: String
}

input CustomerInput {
  name: String!
  email: String!
  phone_num: String!
  country_code: String!
  address_1: String!
  address_2: String
  city: String!
  state: String!
  postal_code: String!
  country: String!
}

input EditCustomerInput {
  name: String
  email: String
  phone_num: String
  country_code: String
  address_1: String
  address_2: String
  city: String
  state: String
  postal_code: String
  country: String
}

type AuthData {
  userId: ID!
  token: String!
  tokenExpiration: Int!
}

type Country {
  name: String!
  iso2: String!
  dialCode: String!
  priority: Int!
  format: String
}

type RootQuery {
  login(email: String!, password: String!): AuthData!
  users: [User!]!
  user(userID: ID!): User!
  companyByAnyField(companyInput: EditCompanyInput): [Company!]
  companies: [Company!]!
  company(companyID: ID!): Company!
  customers: [Customer!]!
  customer(customerID: ID!): Customer!
  countries: [Country!]!
  country(name: String, iso2: String): Country!
  invoices: [Invoice!]!
}

type RootMutation {
  createUser(userInput: UserInput!): User
  editUser(userID: ID!, editUserInput: EditUserInput!) : User
  createCompany(companyInput: CompanyInput!): Company
  editCompany(editCompanyInput: EditCompanyInput!, companyID: ID!): Company
  createCustomer(customerInput: CustomerInput!): Customer
  editCustomer(customerID: ID!, editCustomerInput: EditCustomerInput!) : Customer
  addUserToCompany(userID: ID!, companyID: ID!): Company
  addCustomerToCompany(customerID: ID!, companyID: ID!): Customer
  createInvoice(invoiceInput: InvoiceInput!): Invoice
}

schema {
  query: RootQuery
  mutation: RootMutation
}
`);