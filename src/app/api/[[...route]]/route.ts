import { Hono } from "hono";
import { handle } from "hono/vercel";
import { userRoutes } from "../routes/user.routes";
import { logger } from "hono/logger";
import { summaryRoutes } from "../routes/summary.routes";
import { transactionRoutes } from "../routes/transaction.routes";
import { db } from "@/db/db";

export const runtime = "edge";

const app = new Hono()
  .basePath("/api")
  .route("summarys", summaryRoutes)
  .route("/users", userRoutes)
  .route("/transactions", transactionRoutes);

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
export const DELETE = handle(app);

export type ApiRoutes = typeof app;