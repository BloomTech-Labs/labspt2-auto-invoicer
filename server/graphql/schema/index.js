const { buildSchema } = require('graphql');

module.exports = buildSchema(`
type User {
  _id: ID!
  password: String
  name: String!
  email: String!
  phone_num: String!
  active: Boolean
}

type RootQuery {
  users: [User!]!
}

schema {
  query: RootQuery
}
`);
