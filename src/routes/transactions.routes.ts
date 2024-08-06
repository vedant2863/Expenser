import { db } from "@/db/db";
import { transactions } from "@/db/schema";
import { Hono } from "hono";
import { clerkMiddleware, getAuth } from "@hono/clerk-auth";

export const transactionRoutes = new Hono().get(
  "/",
  clerkMiddleware(),
  async (c) => {
    try {
      const AllTransactions = await db.select().from(transactions);
      return c.json(AllTransactions);
    } catch (error) {
      console.error("error:", error);
      return c.json({ error }, 500);
    }
  }
);
