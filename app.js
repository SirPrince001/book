const express = require("express");
const app = express();
const routes = require("./src/routes");
const bodyParser = require("body-parser");
require("dotenv").config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(routes);
require("./src/database/db").connect();

module.exports = app;
