const usersResolver = require('./users');
const authResolver = require('./auth');
const companiesResolver = require('./companies');

const rootResolver = {
  ...usersResolver,
  ...authResolver,
  ...companiesResolver
};

module.exports = rootResolver;
