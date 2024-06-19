import { Request, Response } from "express";
import { testService } from "../services/test.service";

export const test = (req: Request, res: Response) => {
  const response = testService();
  res.send(response);
};
