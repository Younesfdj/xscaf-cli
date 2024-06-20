import { Logger } from "tslog";

const NODE_ENV = process.env.NODE_ENV || "DEV";

export const log = new Logger({
  minLevel: NODE_ENV === "PROD" ? 3 : 0,
});
