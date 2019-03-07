const Company = require('../../models/company');
const { updateDocumentById, findDocumentsByAnyField } = require('../helpers');

const companyFields = [
  { name: '_id', type: 'string' },
  { name: 'name', type: 'string' },
  { name: 'email', type: 'string' },
  { name: 'phone_num', type: 'string' },
  { name: 'address_1', type: 'string' },
  { name: 'address_2', type: 'string' },
  { name: 'city', type: 'string' },
  { name: 'state', type: 'string' },
  { name: 'postal_code', type: 'number' }
];

module.exports = {
  company: async ({ companyID }) => {
    try {
      const company = await Company.findById(companyID);
      if (!company) {
        throw new Error('There is no company with the specified ID!');
      }
      return { ...company._doc };
    } catch (err) {
      throw err;
    }
  },
  companyByAnyField: ({ companyInput }) => {
    return findDocumentsByAnyField(companyInput, companyFields, Company);
  },
  companies: async () => {
    try {
      const companies = await Company.find();
      if (!companies.length) {
        throw new Error('There is no company yet, please try again later!');
      }
      return companies.map(company => {
        return { ...company._doc };
      });
    } catch (err) {
      throw err;
    }
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
