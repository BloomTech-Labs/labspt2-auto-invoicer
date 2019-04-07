const Customer = require('../../models/customer');
const Company = require('../../models/company');
// const isAuth = require('../../middleware/isAuth');

const {
  findDocumentById,
  findAllDocuments,
  updateDocumentById
} = require('../helpers');

const { formatData } = require('../helpers/format');

module.exports = {
  customers: () => {
    return findAllDocuments(Customer);
  },
  customer: ({ customerID }) => {
    return findDocumentById(customerID, Customer);
  },
  createCustomer: async args => {
    formatData(args.customerInput);
    try {
      const {
        name,
        email,
        phone_num,
        country_code,
        address_1,
        address_2,
        city,
        state,
        postal_code,
        country
      } = args.customerInput;
      const customerExists = await Customer.findOne({
        email
      });
      if (customerExists) {
        throw new Error('Customer already exists');
      }
      const customer = new Customer({
        name,
        email,
        phone_num,
        country_code,
        address_1,
        address_2,
        city,
        state,
        postal_code,
        country
      });
      const newCustomer = await customer.save();
      return {
        ...newCustomer._doc
      };
    } catch (error) {
      throw error;
    }
  },
  editCustomer: async ({ editCustomerInput, customerID }) => {
    return updateDocumentById(editCustomerInput, customerID, Customer);
  },
  addCustomerToCompany: async ({ customerID, companyID }) => {
    try {
      const company = await Company.findById(companyID);
      const customer = await Customer.findById(customerID);
      if (!company) {
        throw new Error('Company does not exist.');
      }
      if (!customer) {
        throw new Error('Customer does not exist.');
      }
      // TODO: checks
      company.customers.push(customerID);
      customer.companies.push(companyID);
      const companyDetails = await company.save();
      const customerDetails = await customer.save();
      // TODO: allow nesting of companies on Customer
      return {
        ...customerDetails._doc
      };
    } catch (error) {
      throw error;
    }
  }
};
