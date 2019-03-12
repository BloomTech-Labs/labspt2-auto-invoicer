const Invoice = require('../../models/invoice');

module.exports = {
  invoices: async () => {
    try {
      const invoices = await Invoice.find();
      return invoices.map(invoice => {
        return { ...invoice._doc };
      });
    } catch (err) {
      throw err;
    }
  },
};
