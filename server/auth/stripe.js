const passport = require('passport');
const StripeStrategy = require('passport-stripe').Strategy;

passport.use(
  new StripeStrategy(
    {
      clientID: process.env.STRIPE_ID,
      clientSecret: process.env.STRIPE_SECRET,
      callbackURL: 'https://www.myautoinvoicer.com'
    },
    async (accessToken, refreshToken, stripe_properties, done) => {
      console.log(stripe_properties, accessToken);
    }
  )
);
