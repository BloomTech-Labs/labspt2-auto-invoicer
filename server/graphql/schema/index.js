const { buildSchema } = require('graphql');

module.exports = buildSchema(`
type User {
  _id: ID!
  email: String!
  password: String
  name: String!
  phone_num: String!
  companies: [Company!]
  invoices: [Invoice!]
}

type Company {
  _id: ID!
  name: String!
  email: String!
  phone_num: String!
  address_1: String!
  address_2: String
  city: String!
  state: String!
  postal_code: Int!
  unlimited_tier: Boolean!
  credits: Int!
  users: [User!]!
  customers: [Customer!]
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
  address_1: String!
  address_2: String
  city: String!
  state: String!
  postal_code: Int!
}

input EditCompanyInput {
  _id: ID
  name: String
  email: String
  phone_num: String
  address_1: String
  address_2: String
  city: String
  state: String
  postal_code: Int
}

input UserInput {
  email: String!
  password: String!
  name: String!
  address: String!
  phone_num: String!
}

type Customer {
  _id: ID!
  name: String!
  address: String!
  email: String!
  phone_num: String!
  companies: [Company!]!
  invoices: [Invoice!]
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
  format: String!
}

input CustomerInput {
  name: String!
  address: String!
  email: String!
  phone_num: String!
}

input CustomerUpdate {
  name: String
  address: String
  email: String
  phone_num: String
}

input UserUpdate {
  email: String
  password: String
  name: String
  address: String
  phone_num: String
}

type RootQuery {
  login(email: String!, password: String!): AuthData!
  users: [User!]!
  user(userID: ID!): User!
  companyByAnyField(companyInput: EditCompanyInput): [Company!]
  companies: [Company!]!
  company(companyID: ID!): Company
  customers: [Customer!]!
  customer(_id:ID!): Customer!
  countries: [Country!]!
  country(name: String, iso2: String): Country!
  invoices: [Invoice!]!
}

type RootMutation {
  createUser(userInput: UserInput!): User
  editUser(userID: ID!, updateUser: UserUpdate!): User
  createCompany(companyInput: CompanyInput!): Company
  editCompany(companyInput: EditCompanyInput!, id: ID!): Company
  createCustomer(customerInput: CustomerInput!): Customer
  updateCustomer(_id: ID!, customerUpdate: CustomerUpdate!): Customer
  addUserToCompany(userID: ID!, companyID: ID!): Company
  createInvoice(invoiceInput: InvoiceInput!): Invoice
}

schema {
  query: RootQuery
  mutation: RootMutation
}
`);
