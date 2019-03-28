const usersResolver = require("./users");
const authResolver = require("./auth");
const companiesResolver = require("./companies");
const customersResolver = require("./customers");
const countryResolver = require("./country");
const invoiceResolver = require("./invoices");

const rootResolver = {
  ...usersResolver,
  ...authResolver,
  ...companiesResolver,
  ...customersResolver,
  ...countryResolver,
  ...invoiceResolver
};

module.exports = rootResolver;
