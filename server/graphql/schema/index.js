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

input UserInput {
  email: String!
  password: String!
  name: String!
  phone_num: String!
}

type AuthData {
  userId: ID!
  token: String!
  tokenExpiration: Int!
}

type RootQuery {
  users: [User!]!
  companies: [Company!]!
  login(email: String!, password: String!): AuthData!
}

type RootMutation {
  createUser(userInput: UserInput): User
}

schema {
  query: RootQuery
  mutation: RootMutation
}
`);
