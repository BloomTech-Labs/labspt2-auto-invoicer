const usersResolver = require('./users');
const authResolver = require('./auth')

const rootResolver = {
  ...usersResolver,
  ...authResolver
};

module.exports = rootResolver;
