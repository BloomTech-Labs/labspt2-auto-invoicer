const router = require('express').Router();
const passport = require('passport');
require('./google');
require('./facebook');
require('./stripe');

// Google
router.get(
  '/google',
  passport.authenticate('google', {
    accessType: 'offline',
    session: true,
    scope: ['profile', 'email']
  })
);

router.get(
  '/google/callback',
  passport.authenticate('google', {
    session: true,
    failureRedirect: '/login'
  }),
  (req, res) => {
    res.redirect('https://www.myautoinvoicer.com');
  }
);

// Facebook
router.get(
  '/facebook',
  passport.authenticate('facebook', {
    session: true,
    scope: ['email']
  })
);

router.get(
  '/facebook/callback',
  passport.authenticate('facebook', {
    session: true,
    failureRedirect: '/login'
  }),
  (req, res) => {
    res.redirect('https://www.myautoinvoicer.com');
  }
);

// Stripe
router.get(
  '/stripe',
  passport.authenticate('stripe', {
    session: true,
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
    res.redirect('https://www.myautoinvoicer.com');
  }
);

module.exports = router;
