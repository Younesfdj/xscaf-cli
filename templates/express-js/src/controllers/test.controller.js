const { testService } = require("../services/test.service.js");
const { StatusCodes } = require("http-status-codes");
/**
 * Handles the test request.
 *
 * @param req - The request object.
 * @param res - The response object.
 */
const test = (req, res) => {
  const response = testService();
  res.status(StatusCodes.OK).json({
    message: response,
  });
};

module.exports = { test };
