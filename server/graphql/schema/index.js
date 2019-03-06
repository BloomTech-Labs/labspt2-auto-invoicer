const { buildSchema } = require('graphql');

module.exports = buildSchema(`
type User {
  _id: ID!
  password: String
  name: String!
  email: String!
  phone_num: String!
  active: Boolean
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

type RootQuery {
  users: [User!]!
  companies: [Company!]!
}

schema {
  query: RootQuery
}
`);
