const jwt = require('jsonwebtoken')

const secret = process.env.SECRET || 'testingJWT';

module.exports = (req, res, next) => {
  const authHeader = req.get('Authorization')
  if (!authHeader) {
    throw new Error('you are not logged in, please log in')
  }
  const token = authHeader.split(' ')[1];
  if (!token || token === '') {
    throw new Error('you are not logged in, please log in')
  }
  try {
    decodedToken = jwt.verify(token, secret)
  } catch (error) {
    throw new Error('unable to verify session at this moment, please try again later')
  }

  if (!decodedToken) {
    throw new Error('your session has expired, please log back in')
  }
  req.isAuth = true;
  req.userId = decodedToken.userId
}