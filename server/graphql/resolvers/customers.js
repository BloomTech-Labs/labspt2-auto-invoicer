const Customer = require('../../models/customer');
const isAuth = require('../../middleware/isAuth');
const {
  findDocumentById,
  findAllDocuments,
  updateDocumentById
} = require('../helpers');

module.exports = {
  customers: async (args, req) => {
    // if (!req.isAuth) {
    // throw new Error('not logged in')}

    return findAllDocuments(Customer)
  },

  customer: async (args, req) => {
    // if (!req.isAuth) {
    // throw new Error('not logged in')}

    return findDocumentById(args._id, Customer)
  },

  createCustomer: async (args, req) => {
    // if (!req.isAuth) {
    // throw new Error('not logged in')}

    try {
      const custExists = await Customer.findOne({
        email: args.customerInput.email,
      });
      if (custExists) {
        throw new Error('Customer already exists');
      }
      const customer = new Customer({
        name: args.customerInput.name,
        address: args.customerInput.address,
        email: args.customerInput.email,
        phone_num: args.customerInput.phone_num,
      });
      const newCustomer = await customer.save();
      return {
        ...newCustomer._doc,
      };
    } catch (error) {
      throw error;
    }
  },

  updateCustomer: async (args, req) => {
    // if (!req.isAuth) {
    // throw new Error('not logged in')}

    return updateDocumentById(args.customerUpdate, args._id, Customer)
  },
};