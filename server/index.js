require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const graphqlHttp = require('express-graphql');
const { connect } = require('mongoose');
const serverless = require('serverless-http');
const passport = require('passport');

const GraphQLSchema = require('./graphql/schema');
const GraphQLResolvers = require('./graphql/resolvers');

const authRouter = require('./auth');
const stripeRouter = require('./stripe');
const welcomeRouter = require('./routers/welcomeRouter');
const passwordResetRouter = require('./routers/passwordResetRouter');
const taxRateRouter = require('./routers/taxRateRouter');

const app = express();
const PORT = process.env.APP_PORT || 5000;

app.use(bodyParser.text());
app.use(express.json(), cors(), helmet());

app.use(passport.initialize());

// JWT Test
app.get(
  '/secure',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    res.send(req.user);
  }
);

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
