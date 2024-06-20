import { testService } from "../services/test.service.js";

export const test = (req, res) => {
  const response = testService();
  res.send(response);
};
