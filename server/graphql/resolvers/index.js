const usersResolver = require('./users');
const authResolver = require('./auth');
const companiesResolver = require('./companies');
const customersResolver = require('./customers');

const rootResolver = {
  ...usersResolver,
  ...authResolver,
  ...companiesResolver,
  ...customersResolver
};

module.exports = rootResolver;
