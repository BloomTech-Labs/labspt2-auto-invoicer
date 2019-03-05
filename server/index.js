require('dotenv').config();

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const graphqlHttp = require('express-graphql');
const app = express();
const PORT = process.env.APP_PORT;

app.use(express.json(), cors(), helmet());

app.listen(PORT, console.log(`App is up and running on port ${PORT}!`));
