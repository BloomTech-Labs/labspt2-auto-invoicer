require('dotenv').config();

const express = require('express');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const graphqlHttp = require('express-graphql');
const { connect } = require('mongoose');
const serverless = require('serverless-http');
const passport = require('passport');

const GraphQLSchema = require('./graphql/schema');
const GraphQLResolvers = require('./graphql/resolvers');

const stripeRouter = require('./stripe');
const welcomeRouter = require('./routers/welcomeRouter');
const passwordResetRouter = require('./routers/passwordResetRouter');
const taxRateRouter = require('./routers/taxRateRouter');
const authRouter = require('./auth');

const app = express();
const PORT = process.env.APP_PORT || 5000;

app.use(
  session({
    name: 'SID',
    store: new MongoStore({
      url: `mongodb://${process.env.DB_USER}:${
        process.env.DB_PASSWORD
      }@autoinvoice-shard-00-00-evkdc.mongodb.net:27017,
      autoinvoice-shard-00-01-evkdc.mongodb.net:27017,
      autoinvoice-shard-00-02-evkdc.mongodb.net:27017/${
        process.env.DB_NAME
      }?ssl=true&replicaSet=AutoInvoice-shard-0&authSource=admin&retryWrites=true`
    }),
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: false,
    cookie: {
      domain: '.myautoinvoicer.com',
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24,
      sameSite: 'lax',
      secure: true
    }
  })
);

app.use(bodyParser.text());
app.use(
  express.json(),
  cors({ origin: 'https://www.myautoinvoicer.com', credentials: true }),
  helmet()
);

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user, done) => {
  done(null, user._id);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

const isAuth = (req, res, next) => {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.status(403).json({
      message: 'You are not logged in.'
    });
  }
};

app.get('/user', isAuth, (req, res) => {
  res.json({ userId: req.user });
});

app.get('/logout', (req, res) => {
  req.logout();
  req.session.destroy(() => {
    res.clearCookie('SID', {
      domain: '.myautoinvoicer.com',
      httpOnly: true,
      sameSite: 'lax',
      secure: true
    });
  });
});

app.use('/stripe', stripeRouter);
app.use('/auth', authRouter);
app.use('/welcome', welcomeRouter);
app.use('/password-reset', passwordResetRouter);
app.use('/taxes', taxRateRouter);
app.use(
  '/graphql',
  graphqlHttp({
    schema: GraphQLSchema,
    rootValue: GraphQLResolvers,
    graphiql: true
  })
);

connect(
  `mongodb+srv://${process.env.DB_USER}:${
    process.env.DB_PASSWORD
  }@autoinvoice-evkdc.mongodb.net/${process.env.DB_NAME}?retryWrites=true`,
  { useNewUrlParser: true }
)
  .then(app.listen(PORT, console.log(`App is up and running on port ${PORT}!`)))
  .catch(err => console.log(err));

module.exports.sls = serverless(app);
