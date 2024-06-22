const { Logger } = require("tslog");

const NODE_ENV = process.env.NODE_ENV || "DEV";

const log = new Logger({
  minLevel: NODE_ENV === "PROD" ? 3 : 0,
});

module.exports = log;
