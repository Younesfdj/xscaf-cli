import { Logger, ILogObj } from "tslog";
const NODE_ENV = process.env.NODE_ENV || "DEV";

/**
 * The logger instance used for logging messages.
 */
export const log: Logger<ILogObj> = new Logger({
  minLevel: NODE_ENV === "PROD" ? 3 : 0,
});
