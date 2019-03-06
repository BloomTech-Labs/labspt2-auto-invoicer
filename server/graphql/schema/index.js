const { buildSchema } = require('graphql');

module.exports = buildSchema(`
type Test {
  _id: ID!
}

type User { 
  _id: ID!
  email: String!
  password: String
}

input UserInput {
  email: String!
  password: String!
}

type RootMutation {
  createUser(userInput: UserInput): User
}
`);
