require("dotenv").config();

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const graphqlHttp = require("express-graphql");
const { connect } = require("mongoose");
const serverless = require("serverless-http");

const app = express();
const PORT = process.env.APP_PORT || 5000;

const GraphQLSchema = require("./graphql/schema");
const GraphQLResolvers = require("./graphql/resolvers");
const authorize = require("./middleware/isAuth");

// for pdf creation
const pdf = require("html-pdf");
const pdfTemplate = require("./documents");

app.use(express.json(), cors(), helmet());
// app.use(authorize)

app.use(
  "/graphql",
  graphqlHttp({
    schema: GraphQLSchema,
    rootValue: GraphQLResolvers,
    graphiql: true
  })
);

// add a route for pdf creation
app.post("/create-pdf", (req, res) => {
  const file = req.body;
  pdf.create(pdfTemplate(file), {}).toFile("documents/result.pdf", err => {
    if (err) {
      res.send(Promise.reject());
    } else res.send(Promise.resolve());
  });
});

// add a route for generating pdf for client
app.get("/fetch-pdf", (req, res) => {
  res.sendFile(`${__dirname}/documents/result.pdf`);
});

connect(
  `mongodb+srv://${process.env.DB_USER}:${
    process.env.DB_PASSWORD
  }@autoinvoice-evkdc.mongodb.net/${process.env.DB_NAME}?retryWrites=true`
)
  .then(app.listen(PORT, console.log(`App is up and running on port ${PORT}!`)))
  .catch(err => console.log(err));

module.exports.sls = serverless(app);
