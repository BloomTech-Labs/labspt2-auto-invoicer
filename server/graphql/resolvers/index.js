const usersResolver = require('./users');
const companiesResolver = require('./companies');
const customersResolver = require('./customers');
const countryResolver = require('./country');
const invoiceResolver = require('./invoices');

const rootResolver = {
  ...usersResolver,
  ...companiesResolver,
  ...customersResolver,
  ...countryResolver,
  ...invoiceResolver
};

module.exports = rootResolver;
