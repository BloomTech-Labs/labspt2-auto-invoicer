const Company = require('../../models/company');

const {
  updateDocumentById,
  findDocumentsByAnyField,
  findDocumentById,
  findAllDocuments
} = require('../helpers');

const { formatData } = require('../helpers/format');

module.exports = {
  company: ({ companyId }) => {
    return findDocumentById(companyId, Company);
  },
  companyByAnyField: ({ companyInput }) => {
    return findDocumentsByAnyField(companyInput, Company);
  },
  companies: () => {
    return findAllDocuments(Company);
  },
  createCompany: async args => {
    formatData(args.companyInput);
    try {
      const {
        name,
        email,
        phoneNumber,
        address1,
        address2,
        zipCode,
        city,
        state
      } = args.companyInput;
      const companyExists = await Company.findOne({
        email
      });
      if (companyExists) {
        throw new Error('This company already exists!');
      }
      const company = new Company({
        name,
        email,
        phoneNumber,
        address1,
        address2,
        zipCode,
        city,
        state
      });
      const newCompany = await company.save();
      return {
        ...newCompany._doc
      };
    } catch (err) {
      throw err;
    }
  },
  editCompany: ({ editCompanyInput, companyId }) => {
    return updateDocumentById(editCompanyInput, companyId, Company);
  },
  buyPlanOrCredits: async ({ companyId, quantity }) => {
    const company = await Company.findById(companyId);
    if (quantity) {
      company.credits += quantity;
    } else {
      company.premium = true;
    }
    const newCompany = await company.save();
    return newCompany._doc;
  }
};
