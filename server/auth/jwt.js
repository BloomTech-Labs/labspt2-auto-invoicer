const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const { ExtractJwt } = require('passport-jwt');

const User = require('../models/user');

passport.use(
  new JwtStrategy(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_SECRET
      // issuer: TODO
      // audience: TODO
      // passReqToCallback: true
      // jsonWebTokenOptions: { maxAge: "1d" }
    },
    async (jwt_payload, done) => {
      try {
        const currentUser = await User.findById(
          jwt_payload.userId,
          'name email'
        );
        if (currentUser) {
          done(null, currentUser);
        } else {
          done(null, false);
        }
      } catch (err) {
        done(err);
      }
    }
  )
);
