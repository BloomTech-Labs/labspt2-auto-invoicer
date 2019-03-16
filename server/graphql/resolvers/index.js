const usersResolver = require('./users');
const authResolver = require('./auth');
const companiesResolver = require('./companies');
const customersResolver = require('./customers');
const countryResolver = require('./country')

const rootResolver = {
  ...usersResolver,
  ...authResolver,
  ...companiesResolver,
  ...customersResolver,
  ...countryResolver,
};

module.exports = rootResolver;
