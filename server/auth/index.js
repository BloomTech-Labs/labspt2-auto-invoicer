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
  res.send('<h1>Google Its working!</h1>');
});

router.get(
  '/facebook',
  passport.authenticate('facebook', { scope: ['profile', 'email'] })
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

module.exports = router;
