const Invoice = require("../../models/invoice");
const Company = require("../../models/company");
const User = require("../../models/user");
const Customer = require("../../models/customer");
//may need to add Invoice2 to helpers
const { findDocumentById, findAllDocuments } = require("../helpers");

module.exports = {
  invoices: () => {
    return findAllDocuments(Invoice);
  },
  invoice: ({ invoiceID }) => {
    return findDocumentById(invoiceID, Invoice);
  },
  createInvoice: async ({ invoiceInput }) => {
    try {
      // ID from logged-in user creating the invoice
      const user = await User.findById("5c8d88c17fef7140f485950f");
      // find or create: if new company --> createCompany
      const company = await Company.findById("5c8d925db548bf03b82a047b");
      // find or create: if new customer --> createCustomer
      const customer = await Customer.findById("5c8d97f7dc41c24070feba41");

      const invoice = new Invoice({
        // similar to resolvers/invoices.js
        // createdBy: user._id,
        // invoice_num: invoiceInput.invoice_num,
        // company_id: company._id,
        // customer_id: customer._id,
        // new features
        invoiceNumber: invoiceInput.invoiceNumber,
        languageSelection: invoiceInput.languageSelection,
        currencySelection: invoiceInput.currencySelection,
        addressFrom: invoiceInput.addressFrom,
        addressTo: invoiceInput.addressTo,
        cityTo: invoiceInput.cityTo,
        stateRegionTo: invoiceInput.stateRegionTo,
        zipCodeTo: invoiceInput.zipCodeTo,
        clientEmailTo: invoiceInput.clientEmailTo,
        selectedDate: invoiceInput.selectedDate,
        invoiceDueDate: invoiceInput.invoiceDueDate,
        balanceDue: invoiceInput.balanceDue,
        subtotal: invoiceInput.subtotal,
        discount: invoiceInput.discount,
        tax: invoiceInput.tax,
        shipping: invoiceInput.shipping,
        total: invoiceInput.total,
        amountPaid: invoiceInput.amountPaid,
        invoiceNotes: invoiceInput.invoiceNotes,
        invoiceTerms: invoiceInput.invoiceTerms
      });

      const newInvoice = await invoice.save();
      // user.invoices.push(newInvoice._doc._id);
      // company.invoices.push(newInvoice._doc._id);
      // customer.invoices.push(newInvoice._doc._id);
      // new invoice features

      // await user.save();
      // await company.save();
      // await customer.save();
      // new invoice features

      return {
        ...newInvoice._doc
      };
    } catch (err) {
      throw err;
    }
  }
};
