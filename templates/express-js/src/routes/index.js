import testRouter from "./test.router.js";
import swaggerUi from "swagger-ui-express";
import swaggerDocs from "../docs/swagger.json" assert { type: "json" };

export default function setRouters(app) {
  app.use("/test", testRouter);
  app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
}
