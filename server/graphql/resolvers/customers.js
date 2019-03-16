const Customer = require('../../models/customer');
const Company = require('../../models/company');
// const isAuth = require('../../middleware/isAuth');

const {
  findDocumentById,
  findAllDocuments,
  updateDocumentById,
  formatData
} = require('../helpers');

module.exports = {
  customers: () => {
    return findAllDocuments(Customer);
  },
  customer: ({ customerID }) => {
    return findDocumentById(customerID, Customer);
  },
  createCustomer: async args => {
    try {
      const customerExists = await Customer.findOne({
        email: args.customerInput.email
      });
      if (customerExists) {
        throw new Error('Customer already exists');
      }
      formatData(args.customerInput);
      const customer = new Customer({
        name: args.customerInput.name,
        address: args.customerInput.address,
        email: args.customerInput.email,
        phone_num: args.customerInput.phone_num
      });
      const newCustomer = await customer.save();
      return {
        ...newCustomer._doc
      };
    } catch (error) {
      throw error;
    }
  },
  updateCustomer: async args => {
    return updateDocumentById(args.customerUpdate, args._id, Customer);
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
