const bcrypt = require('bcryptjs');

const User = require('../../models/user');
const Company = require('../../models/company')
const isAuth = require('../../middleware/isAuth')

const {
  updateDocumentById
} = require('../helpers/index')

module.exports = {
  user: async ({
    userID
  }, req) => {
    try {
      const user = await User.findById(userID);
      if (!user) {
        throw new Error('user does not exist')
      };
      return {
        ...user._doc,
        password: null
      }
    } catch (error) {
      throw error
    };
  },

  users: async (args, req) => {
    // if (!req.isAuth) {
    //   throw new Error('not logged in')
    // }

    try {
      const users = await User.find();
      return users.map(user => {
        return {
          ...user._doc,
          password: null
        }
      });
    } catch (err) {
      throw err;
    }
  },
  createUser: async (args) => {
    try {
      const userExists = await User.findOne({
        email: args.userInput.email
      });
      if (userExists) {
        throw new Error('Username already exists');
      }
      const hashedPassword = await bcrypt.hash(args.userInput.password, 12);
      const user = new User({
        email: args.userInput.email,
        password: hashedPassword,
        name: args.userInput.name,
        phone_num: args.userInput.phone_num
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
    updateUser,
    userID
  }, req) => {
    try {
      const userExist = await User.findById(userID)
      if (!userExist) {
        throw new Error('user does not exist')
      }
      Object.keys(updateUser).forEach(key => {
        if (!updateUser[key]) {
          delete updateUser[key];
        }
      });
      const updatedUser = await User.findByIdAndUpdate(userID, {
        $set: {
          ...updateUser
        }
      }, {
        new: true
      });
      return {
        ...updatedUser._doc,
        password: null
      }
    } catch (error) {
      throw error
    }
  },

  addUserToCompany: async ({
    userID,
    companyID
  }) => {
    try {
      const company = await Company.findById(companyID)
      const user = await User.findById(userID)
      if (!company) {
        throw new Error('company does not exist')
      }
      if (!user) {
        throw new Error('user does not exist')
      }
      company.users.push(userID)
      user.companies.push(companyID)
      const companyDetails = await company.save()
      const userDetails = await user.save()
      return {
        ...companyDetails._doc,
        ...userDetails._doc
      }
    } catch (error) {
      throw error
    }
  }
};