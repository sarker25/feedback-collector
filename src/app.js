const express = require("express");
const applyMiddleware = require("./middlewares");
const app = express();
const { passportAuth } = require("./routes");
require("./lib/passsport");

applyMiddleware(app);

passportAuth(app);
module.exports = app;
