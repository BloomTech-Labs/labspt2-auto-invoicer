const bcrypt = require('bcryptjs');

const User = require('../../models/user');
const Company = require('../../models/company');
// const isAuth = require('../../middleware/isAuth');

const {
  findAllDocuments,
  findDocumentById
} = require('../helpers/index');

const {
  formatData
} = require('../helpers/format')

module.exports = {
  user: ({
    userID
  }) => {
    return findDocumentById(userID, User);
  },
  users: () => {
    // if (!req.isAuth) {
    //   throw new Error('not logged in')
    // }
    return findAllDocuments(User);
  },
  createUser: async args => {
    formatData(args.userInput);
    try {
      const {
        name,
        email,
        password,
        phone_num,
        country_code,
        address_1,
        address_2,
        city,
        state,
        postal_code,
        country
      } = args.userInput
      const userExists = await User.findOne({
        email
      });
      if (userExists) {
        throw new Error('Username already exists');
      }
      const hashedPassword = await bcrypt.hash(password, 12);
      const user = new User({
        name,
        email,
        hashedPassword,
        phone_num,
        country_code,
        address_1,
        address_2,
        city,
        state,
        postal_code,
        country
      });
      const newUser = await user.save();
      return {
        ...newUser._doc,
        password: null
      };
    } catch (err) {
      throw err;
    }
  },
  editUser: async ({
    editUserInput,
    userID
  }, req) => {
    try {
      const userExist = await User.findById(userID);
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
        userID, {
          $set: {
            ...editUserInput,
          },
        }, {
          new: true,
        }
      );
      return {
        ...updatedUser._doc,
        password: null
      };
    } catch (error) {
      throw error;
    }
  },
  addUserToCompany: async ({
    userID,
    companyID
  }) => {
    try {
      const company = await Company.findById(companyID);
      const user = await User.findById(userID);
      if (!company) {
        throw new Error('company does not exist');
      }
      if (!user) {
        throw new Error('user does not exist');
      }
      company.users.push(userID);
      user.companies.push(companyID);
      const companyDetails = await company.save();
      const userDetails = await user.save();
      return {
        ...userDetails._doc,
      };
    } catch (error) {
      throw error;
    }
  },
};