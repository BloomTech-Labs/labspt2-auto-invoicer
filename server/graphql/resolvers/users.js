const User = require('../../models/user');
const Company = require('../../models/company');

const { findAllDocuments, findDocumentById } = require('../helpers/index');

const { formatData } = require('../helpers/format');

module.exports = {
  user: ({ userId }) => {
    return findDocumentById(userId, User);
  },
  users: () => {
    return findAllDocuments(User);
  },
  createUser: async args => {
    formatData(args.userInput);
    try {
      const { name, email, phoneNumber } = args.userInput;
      const userExists = await User.findOne({
        email
      });
      if (userExists) {
        throw new Error('Username already exists');
      }
      const user = new User({
        name,
        email,
        phoneNumber
      });
      const newUser = await user.save();
      return {
        ...newUser._doc
      };
    } catch (err) {
      throw err;
    }
  },
  editUser: async ({ editUserInput, userId }, req) => {
    try {
      const userExist = await User.findById(userId);
      if (!userExist) {
        throw new Error('user does not exist');
      }
      Object.keys(editUserInput).forEach(key => {
        if (!editUserInput[key]) {
          delete editUserInput[key];
        }
      });
      formatData(editUserInput);
      const updatedUser = await User.findByIdAndUpdate(
        userId,
        {
          $set: {
            ...editUserInput
          }
        },
        {
          new: true
        }
      );
      return {
        ...updatedUser._doc
      };
    } catch (error) {
      throw error;
    }
  }
  // addUserToCompany: async ({ userId, companyId }) => {
  //   try {
  //     const company = await Company.findById(companyId);
  //     const user = await User.findById(userId);
  //     if (!company) {
  //       throw new Error('company does not exist');
  //     }
  //     if (!user) {
  //       throw new Error('user does not exist');
  //     }
  //     company.users.push(userId);
  //     user.companies.push(companyId);
  //     const companyDetails = await company.save();
  //     const userDetails = await user.save();
  //     return {
  //       ...userDetails._doc
  //     };
  //   } catch (error) {
  //     throw error;
  //   }
  // }
};
