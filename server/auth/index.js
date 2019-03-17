const router = require('express').Router();
const passport = require('passport');
const User = require('../models/user');
require('./passport');

router.get(
  '/google',
  passport.authenticate('google', {
    scope: ['profile', 'email']
  })
);

router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

router.get('/google/home', passport.authenticate('google'), (req, res) => {
  res.send('<h1>Google Its working!</h1>');
});

router.get(
  '/facebook',
  passport.authenticate('facebook', { scope: ['email'] })
);
router.get(
  '/facebook/home',
  passport.authenticate('facebook', {
    successRedirect: '/auth/facebook/home',
    failureRedirect: '/login'
  })
);

router.get('/facebook/home', passport.authenticate('facebook'), (req, res) => {
  res.send('<h1>Facebook Its working!</h1>');
});

router.get('/stripe', passport.authenticate('stripe', { scope: 'read_write' }));

router.get(
  '/stripe/home',
  passport.authenticate('stripe', { failureRedirect: '/auth' }),
  (req, res) => {
    res.send('<h1>Stripe Its working!</h1>');
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
