const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const User = require('../models/user');

passport.use(
  new GoogleStrategy(
    {
      callbackURL: '/',
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    },
    async (accessToken, refreshToken, profile, done) => {
      const { email } = profile._json;
      // specify what to send back this gets sent back as req.user
      const currentUser = await User.findOne({ email }, 'email name googleId');
      if (currentUser) {
        return done(null, currentUser);
      }
      const newUser = await new User({
        email,
        name: profile.displayName,
        googleId: profile.id
      }).save();
      return done(null, newUser);
    }
  )
);
