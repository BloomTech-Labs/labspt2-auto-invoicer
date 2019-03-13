const bcrypt = require('bcryptjs');

const User = require('../../models/user');
const Company = require('../../models/company')
const isAuth = require('../../middleware/isAuth')

module.exports = {
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

  addUserToCompany: async ({
    userID,
    companyID
  }) => {
    try {
      // const user = await User.findOne({_id: userID})
      // if (!user) {
      //   throw new Error('user does not exist')
      // }
      const company = await Company.findById(companyID)
      const user = await User.findById(userID)
      if (!company) {
        throw new Error('company does not exist')
      }
      if (!company) {
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