const Company = require('../../models/company');

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
  createCompany: () => {},
  editCompany: () => {}
};
