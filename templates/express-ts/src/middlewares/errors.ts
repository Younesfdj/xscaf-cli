import { Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";
const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  return res
    .status(StatusCodes.INTERNAL_SERVER_ERROR)
    .json({ message: err.message });
};

export default errorHandler;
