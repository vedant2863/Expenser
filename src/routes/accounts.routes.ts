import { Hono } from "hono";
import { accounts } from "@/db/schema";
import { db } from "@/db/db";
import { clerkMiddleware, getAuth } from "@hono/clerk-auth";
import { eq } from "drizzle-orm";

export const accountsRoutes = new Hono()
.get(
  "/user",
  async (c) => {
    try {
      return c.json({ message: "Hello from accounts" });
    } catch (error) {
      console.error("error:", error);
      return c.json({ error }, 500);
    }
  }
)
.get(
  "/",
  clerkMiddleware(),
  async (c) => {
    try {
        const authUser = getAuth(c);
        if (!authUser?.userId) {
          return c.json({ error: "Unauthorized" }, 401);
        }
      const AllAccounts = await db.select().from(accounts).where(eq(accounts.userId, authUser.userId));
      return c.json(AllAccounts);
    } catch (error) {
      console.error("error:", error);
      return c.json({ error }, 500);
    }
  }
);