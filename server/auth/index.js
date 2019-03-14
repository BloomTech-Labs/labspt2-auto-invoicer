const router = require('express').Router();
const passport = require('passport');
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
  res.send('<h1>Its working!</h1>');
});

module.exports = router;
