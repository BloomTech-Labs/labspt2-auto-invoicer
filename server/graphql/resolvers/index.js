const usersResolver = require('./users');
const authResolver = require('./auth')
const customersResolver = require('./customers')

const rootResolver = {
  ...usersResolver,
  ...authResolver,
  ...customersResolver
};

module.exports = rootResolver;
