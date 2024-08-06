import { Hono } from "hono";

export const accountRoutes = new Hono().get("/", (c) => {
    return c.json({
        message: "accounts"
    })
})