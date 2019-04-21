const Company = require('../../models/company');
// const User = require('../../models/user');

const {
  updateDocumentById,
  findDocumentsByAnyField,
  findDocumentById,
  findAllDocuments
} = require('../helpers');

const { formatData } = require('../helpers/format');

module.exports = {
  company: ({ companyID }) => {
    return findDocumentById(companyID, Company);
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
        phone_num,
        country_code,
        address_1,
        address_2,
        city,
        state,
        postal_code,
        country
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
        phone_num,
        country_code,
        address_1,
        address_2,
        city,
        state,
        postal_code,
        country
      });
      const newCompany = await company.save();
      return {
        ...newCompany._doc
      };
    } catch (err) {
      throw err;
    }
  },
  editCompany: ({ editCompanyInput, companyID }) => {
    Object.keys(editCompanyInput).forEach(key => {
      if (key === "unlimited_tier" || key === "credits") {
        delete editCompanyInput[key];
      }
      return updateDocumentById(editCompanyInput, companyID, Company);
    });
  },
  buyPlanOrCredits: async ({ companyID, quantity }) => {
    const company = await Company.findById(companyID);
    if (quantity) {
      company.credits += quantity;
    } else {
      company.unlimited_tier = true;
    }
    const newCompany = await company.save();
    return newCompany._doc;
  }
};
