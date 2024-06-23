import { Application } from "express";
import testRouter from "./test.router";
import swaggerUi from "swagger-ui-express";
import swaggerDocs from "../docs/swagger.json";

/**
 * Sets up the routers for the application.
 *
 * @param app - The Express application.
 */
export default function setRouters(app: Application) {
  app.use("/test", testRouter);
  app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
}
