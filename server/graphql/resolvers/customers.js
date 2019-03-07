const Customer = require('../../models/customer')
const isAuth = require('../../middleware/isAuth')

module.exports = {
  customers: async (args, req) => {
    // if (!req.isAuth) {
    // throw new Error('not logged in')}

    try {
      const customers = await Customer.find();
      customers.map( customer => {
        return {...customer}
      })
    } catch (error) {
      throw error
    }
  },

  createCustomer: async (args, req) => {
    // if (!req.isAuth) {
    // throw new Error('not logged in')}

    try {
      const custExists = await Customer.findOne({email: args.customerInput.email})
      if(custExists) {
        throw new Error('Customer already exists')
      }
      const customer = new Customer({
        name: args.customerInput.name,
        address: args.customerInput.address,
        email: args.customerInput.email,
        phone_num: args.customerInput.phone_num,
      })
      const newCustomer = await customer.save()
      return {...newCustomer}
    } catch (error) {
      throw error
    }
  }
}