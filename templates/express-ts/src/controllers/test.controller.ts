import { Request, Response } from "express";
import { testService } from "../services/test.service";
import { StatusCodes } from "http-status-codes";

/**
 * Handles the test request.
 *
 * @param req - The request object.
 * @param res - The response object.
 */
export const test = (req: Request, res: Response) => {
  const response = testService();
  res.status(StatusCodes.OK).json({
    message: response,
  });
};
