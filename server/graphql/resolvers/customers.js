const Customer = require('../../models/customer');
const isAuth = require('../../middleware/isAuth');
const {
  findDocumentById,
  findAllDocuments,
  updateDocumentById,
  formatPhoneNum
} = require('../helpers');

module.exports = {
  customers: async () => {
    return findAllDocuments(Customer)
  },

  customer: async args => {
    return findDocumentById(args._id, Customer)
  },

  createCustomer: async args => {
    try {
      const custExists = await Customer.findOne({
        email: args.customerInput.email,
      });
      if (custExists) {
        throw new Error('Customer already exists');
      }
      formatPhoneNum(args.customerInput)
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

  updateCustomer: async args => {
    return updateDocumentById(args.customerUpdate, args._id, Customer)
  },
};