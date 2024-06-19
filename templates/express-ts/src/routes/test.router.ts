import { Router, Request, Response } from "express";
import { test } from "../controllers/test.controller";

const testRouter = Router();

testRouter.get("/", test);

export default testRouter;
