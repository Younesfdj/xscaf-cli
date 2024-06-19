import { Application } from "express";
import testRouter from "./test.router";
import swaggerUi from "swagger-ui-express";
import swaggerDocs from "../docs/swagger.json";
export default function setRouters(app: Application) {
  app.use("/test", testRouter);
  app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
}
