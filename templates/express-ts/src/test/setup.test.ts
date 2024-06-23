import request from "supertest";

import { app } from "../app";

/**
 * Test setup
 */
describe("Test setup", () => {
    /**
     * Test the /test route
     */
    test("/test route", async () => {
        const res = await request(app).get("/test");
        expect(res.body).toEqual({ message: "everything is up and running!!" });
    });
});
