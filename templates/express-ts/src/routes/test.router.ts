import { Router, Request, Response } from "express";
import { test } from "../controllers/test.controller";

/**
 * Express router for handling test routes.
 */
const testRouter = Router();

testRouter.get("/", test);

export default testRouter;
