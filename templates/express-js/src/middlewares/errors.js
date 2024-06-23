const { StatusCodes } = require("http-status-codes");

/**
 * Express error handling middleware.
 * @param err - The error object.
 * @param req - The Express request object.
 * @param res - The Express response object.
 * @param next - The next middleware function.
 * @returns The Express response with an error message.
 */
const errorHandler = (err, req, res, next) => {
  return res
    .status(StatusCodes.INTERNAL_SERVER_ERROR)
    .json({ message: err.message });
};

module.exports = errorHandler;
