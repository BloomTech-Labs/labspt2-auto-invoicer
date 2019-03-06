const bcrypt = require('bcryptjs')

const User = require('../../models/user')

module.exports = {
  createUser: async args => {
    try {
      const userExist = await User.findOne({ email: args.userInput.email })

      if (userExist) {
        throw new Error('email is already in use')
      }
      const hashedPassword = await bcrypt.hash(args.userInput.password, 13)

      const user = new User({
        email: args.userInput.email,
        password: hashedPassword
      });

      const savedUser = await user.save()

      return { ...savedUser._doc, password: null, _id: savedUser._id}
    } catch (error) {
      throw Error
    }
  }
}