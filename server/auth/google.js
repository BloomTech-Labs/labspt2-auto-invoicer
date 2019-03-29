const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const User = require('../models/user');

passport.use(
  new GoogleStrategy(
    {
<<<<<<< HEAD
      callbackURL: '/',
=======
      callbackURL: '/dev/auth/google/home',
>>>>>>> 79526c93a311afb6df57caa3f4f34c96c8811301
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    },
    async (accessToken, refreshToken, profile, done) => {
      const { email } = profile._json;
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
