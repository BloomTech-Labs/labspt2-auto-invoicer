const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const User = require('../../models/user')
const secret = process.env.SECRET || 'testingJWT';

module.exports = {
  login: async ({email, password}) => {
    const user = await User.findOne({email: email});
    if (!user) {
      throw new Error('username or password is incorrect');
    }
    const isAuthenticated = await bcrypt.compare(password, user.password)
    if (!isAuthenticated) {
      throw new Error('username or password is incorrect');
    }
    const token = jwt.sign({
      userId: user.id},
      secret,
      {expiresIn: '1h'}
    )
      return {userId: user.id, token: token, tokenExpiration: 1}
  }
};