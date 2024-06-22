const testRouter = require("./test.router.js");
const swaggerUi = require("swagger-ui-express");
const swaggerDocs = require("../docs/swagger.json");

function setRouters(app) {
  app.use("/test", testRouter);
  app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
}

module.exports = setRouters;
