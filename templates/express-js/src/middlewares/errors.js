import { StatusCodes } from "http-status-codes";
const errorHandler = (err, req, res, next) => {
  return res
    .status(StatusCodes.INTERNAL_SERVER_ERROR)
    .json({ message: err.message });
};

export default errorHandler;
