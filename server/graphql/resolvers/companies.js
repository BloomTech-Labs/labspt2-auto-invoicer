const Company = require('../../models/company');
const {
  updateDocumentById,
  findDocumentsByAnyField,
  findDocumentById,
  findAllDocuments
} = require('../helpers');

module.exports = {
  company: async ({ companyID }) => {
    return findDocumentById(companyID, Company);
  },
  companyByAnyField: ({ companyInput }) => {
    return findDocumentsByAnyField(companyInput, Company);
  },
  companies: () => {
    return findAllDocuments(Company);
  },
  createCompany: async ({ companyInput }) => {
    try {
      const {
        name,
        email,
        phone_num,
        address_1,
        address_2,
        city,
        state,
        postal_code
      } = companyInput;
      const companyExists = await Company.findOne({ name });
      if (companyExists) {
        throw new Error('This company already exists!');
      }
      const company = new Company({
        name,
        email,
        phone_num,
        address_1,
        address_2,
        city,
        state,
        postal_code
      });
      const newCompany = await company.save();
      return { ...newCompany._doc };
    } catch (err) {
      throw err;
    }
  },
  editCompany: ({ companyInput, id }) => {
    return updateDocumentById(companyInput, id, Company);
  }
};
