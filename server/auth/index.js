const router = require('express').Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');

require('./jwt');
require('./google');
require('./facebook');
require('./stripe');

// Generate JWT
const generateToken = user => {
  const payload = {
    userId: user._id
  };
  const options = {
    expiresIn: 86400
  };
  return jwt.sign(payload, process.env.JWT_SECRET, options);
};

// Google
router.get(
  '/google',
  passport.authenticate('google', {
    session: false,
    scope: ['profile', 'email']
  })
);

router.get(
  '/google/home',
  passport.authenticate('google', {
    session: false,
    failureRedirect: '/login'
  }),
  (req, res) => {
    const token = generateToken(req.user);
    res.redirect(`https://auto-invoicer.netlify.com/?token=${token}`);
  }
);

// Facebook
router.get(
  '/facebook',
  passport.authenticate('facebook', {
    session: false,
    scope: ['email']
  })
);

router.get(
  '/facebook/home',
  passport.authenticate('facebook', {
    session: false,
    failureRedirect: '/login'
  }),
  (req, res) => {
    const token = generateToken(req.user);
    res.redirect(`https://auto-invoicer.netlify.com/?token=${token}`);
  }
);

// Stripe
router.get(
  '/stripe',
  passport.authenticate('stripe', {
    session: false,
    scope: 'read_write'
  })
);

router.get(
  '/stripe/home',
  passport.authenticate('stripe', {
    session: false,
    failureRedirect: '/auth'
  }),
  (req, res) => {
    const token = generateToken(req.user);
    res.redirect(`https://auto-invoicer.netlify.com/?token=${token}`);
  }
);

router.post(
  '/local',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    res.send(req.user);
  }
);

module.exports = router;
