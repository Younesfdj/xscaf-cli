/**
 * This is a minimified setup for the express application.
 */
import express from "express";
import setRouters from "./routes";
import errorHandler from "./middlewares/errors";

/**
 * The main application instance.
 */

export const app = express();
app.use(express.json());

setRouters(app);

app.use(errorHandler);
