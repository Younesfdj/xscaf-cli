const { test } = require("../controllers/test.controller.js");
const { Router } = require("express");

/**
 * Express router for handling test routes.
 */
const testRouter = Router();

testRouter.get("/", test);

module.exports = testRouter;
