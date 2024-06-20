import { test } from "../controllers/test.controller.js";
import { Router } from "express";

const testRouter = Router();

testRouter.get("/", test);

export default testRouter;
