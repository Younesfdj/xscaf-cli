const { testService } = require("../services/test.service.js");

const test = (req, res) => {
  const response = testService();
  res.send(response);
};

module.exports = { test };
