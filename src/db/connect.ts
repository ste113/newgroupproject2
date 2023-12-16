import { drizzle } from "drizzle-orm/better-sqlite3";
import Database from "better-sqlite3";
import "dotenv/config";

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is missing");
}

export const sqlite = new Database(process.env.DATABASE_URL);
export const db = drizzle(sqlite);
