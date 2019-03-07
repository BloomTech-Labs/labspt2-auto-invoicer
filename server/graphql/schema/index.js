const { buildSchema } = require('graphql');

module.exports = buildSchema(`
type User {
  _id: ID!
  email: String!
  password: String
  name: String!
  phone_num: String!
  companies: [Company!]
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
}

type Customer {
  _id: ID!
  name: String!
  address: String!
  email: String!
  phone_num: String!
  companies: [Company!]!
}

type AuthData {
  userId: ID!
  token: String!
  tokenExpiration: Int!
}

input UserInput {
  email: String!
  password: String!
  name: String!
  phone_num: String!
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

type RootQuery {
  users: [User!]!
  companies: [Company!]!
  customers: [Customer!]!
  customer(_id:ID!): Customer!
  login(email: String!, password: String!): AuthData!
}

type RootMutation {
  createUser(userInput: UserInput): User
  createCustomer(customerInput: CustomerInput): Customer
  updateCustomer(_id: ID!, customerUpdate: CustomerUpdate!) : Customer
}

schema {
  query: RootQuery
  mutation: RootMutation
}
`);
