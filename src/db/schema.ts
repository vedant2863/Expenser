import {
    pgTable,
    timestamp,
    text,
    pgEnum,
    integer,
    varchar,
    boolean,
  } from "drizzle-orm/pg-core";
  
  // Schema
  export const subscriptionEnum = pgEnum("subscription", [
    "unSubscribed",
    "subscribed",
  ]);
  export const users = pgTable("users", {
    id: integer("id").primaryKey(),
    userId: text("userId").unique().notNull(),
    subscription: subscriptionEnum("subscription").default("unSubscribed"),
    createdAt: timestamp("created_at").notNull().defaultNow(),
    updatedAt: timestamp("updated_at")
      .notNull()
      .$onUpdate(() => new Date()),
  });
  
  export const accounts = pgTable("accounts", {
    id: integer("id").primaryKey().references(() => users.id),
    accountId: text("accountId").unique().notNull(),
    type: text("type").notNull(),
    connected: boolean("connected").default(true),
  });
  
  export const transactionTypeEnum = pgEnum("transaction_type", [
    "income",
    "expense",
  ]);
  export const transactions = pgTable("transactions", {
    id: integer("id").primaryKey().references(() => users.id),
    amount: integer("amount").notNull(),
    categoryId: integer("category_id").references(() => categories.id),
    type: transactionTypeEnum("type").notNull(),
    description: varchar("description", { length: 100 }),
    createdAt: timestamp("created_at").notNull().defaultNow(),
    updatedAt: timestamp("updated_at")
      .notNull()
      .$onUpdate(() => new Date()),
  });
  
  export const categories = pgTable("categories", {
    id: integer("id").primaryKey().references(() => users.id),
    name: varchar("name").notNull(),
    createdAt: timestamp("created_at").notNull().defaultNow(),
    updatedAt: timestamp("updated_at")
      .notNull()
      .$onUpdate(() => new Date()),
  });