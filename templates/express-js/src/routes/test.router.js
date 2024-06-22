const { test } = require("../controllers/test.controller.js");
const { Router } = require("express");

const testRouter = Router();

testRouter.get("/", test);

module.exports = testRouter;
