/**
 * This is a minimified setup for the express application.
 */
const express = require("express");
const setRouters = require("./routes/index.js");
const errorHandler = require("./middlewares/errors.js");

/**
 * The main application instance.
 */

const app = express();
app.use(express.json());

setRouters(app);

app.use(errorHandler);

module.exports = app;
