const { buildSchema } = require('graphql');

module.exports = buildSchema(`
type Test {
  _id: ID!
}
`);
