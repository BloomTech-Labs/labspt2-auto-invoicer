const Customer = require('../../models/customer')
const isAuth = require('../../middleware/isAuth')

module.exports = {
  customers: async (args, req) => {
    // if (!req.isAuth) {
    // throw new Error('not logged in')}

    try {
      const customers = await Customer.find();
      return customers.map( customer => {
        return {...customer._doc}
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
      return {...newCustomer._doc}
    } catch (error) {
      throw error
    }
  },

  updateCustomer: async (args, req) => {
    // if (!req.isAuth) {
    // throw new Error('not logged in')}
    
    const {name, address, email, phone_num} = args.customerUpdate
    const customer = await Customer.findOne({_id: args._id})
    if (!customer) {
      throw new Error('Customer does not exist')
    }

    if (typeof name === 'string') {
      customer.name = name
    }

    if (typeof address === 'string') {
      customer.address = address
    }

    if (typeof email === 'string') {
      const emailExists = await Customer.findOne({email: email})
      if (emailExists) {
        throw new Error('unable to use this email, as is already in use')
      }
      customer.email = email
    }
    
    if (typeof phone_num === 'string') {
      customer.phone_num = phone_num
    }
    
    const updatedUser = await customer.save()
    return { ...updatedUser._doc}
  }
}