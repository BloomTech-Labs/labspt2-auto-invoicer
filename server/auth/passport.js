const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");
const User = require("../models/user");
const FacebookStrategy = require("passport-facebook").Strategy;
const StripeStrategy = require("passport-stripe").Strategy;

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const user = await User.findById(id);
  done(null, user);
});

passport.use(
  new GoogleStrategy(
    {
      callbackURL: "/auth/google/home",
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    },
    async (accessToken, refreshToken, profile, done) => {
      const { email, picture, gender, locale } = profile._json;
      const currentUser = await User.findOne({ email });
      if (currentUser) {
        done(null, currentUser);
      } else {
        const newUser = await new User({
          email,
          name: profile.displayName,
          google: {
            googleId: profile.id,
            picture,
            gender,
            locale
          }
        }).save();
        done(null, newUser);
      }
    }
  )
);

passport.use(
  new FacebookStrategy(
    {
      callbackURL: "/auth/facebook/home",
      clientID: process.env.FACEBOOK_APP_ID,
      clientSecret: process.env.FACEBOOK_APP_SECRET_KEY,
      profileFields: ["id", "emails", "name"]
    },
    async (accessToken, refreshToken, profile, done) => {
      const { first_name, last_name, email, id } = profile._json;
      const currentUser = await User.findOne({ email });
      if (currentUser) {
        done(null, currentUser);
      } else {
        const newUser = await new User({
          email,
          name: `${first_name} ${last_name}`,
          facebook: {
            facebookId: id
          }
        }).save();
        done(null, newUser);
      }
    }
  )
);

passport.use(
  new StripeStrategy(
    {
      clientID: process.env.STRIPE_ID,
      clientSecret: process.env.STRIPE_SECRET,
      callbackURL: "https://auto-invoicer.netlify.com"
    },
    async (accessToken, refreshToken, stripe_properties, done) => {
      console.log(stripe_properties, accessToken);
    }
  )
);
