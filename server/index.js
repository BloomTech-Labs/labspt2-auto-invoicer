require('dotenv').config();

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const graphqlHttp = require('express-graphql');
const { connect } = require('mongoose');
const serverless = require('serverless-http');

const app = express();
const PORT = process.env.APP_PORT || 5000;

const GraphQLSchema = require('./graphql/schema');
const GraphQLResolvers = require('./graphql/resolvers');
const authorize = require('./middleware/isAuth');

app.use(express.json(), cors(), helmet());
// app.use(authorize)

app.use(
  '/graphql',
  graphqlHttp({
    schema: GraphQLSchema,
    rootValue: GraphQLResolvers,
    graphiql: true,
  })
);

connect(
  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@autoinvoice-evkdc.mongodb.net/${
    process.env.DB_NAME
  }?retryWrites=true`
)
  .then(app.listen(PORT, console.log(`App is up and running on port ${PORT}!`)))
  .catch(err => console.log(err));

module.exports.sls = serverless(app);
