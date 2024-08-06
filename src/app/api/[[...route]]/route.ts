import { Hono } from "hono";
import { handle } from "hono/vercel";
import { logger } from "hono/logger";

import { accountRoutes } from "@/routes/accounts.route";

export const runtime = "edge";

const app = new Hono().basePath("/api");



const routes = app
  .route("/accounts", accountRoutes)

  app.use("*", logger());

app.get('/hello', (c) => {
  return c.json({
    message: 'Hello Next.js!',
  })
})

app.notFound((c) => {
  return c.text("Custom 404 Message", 404);
});

app.onError((err, c) => {
  console.error(`${err}`);
  return c.text("Custom Error Message", 500);
});

export const GET = handle(app);
export const POST = handle(app);
export const PATCH = handle(app);
export const DELETE = handle(app);


export type AppType = typeof routes;