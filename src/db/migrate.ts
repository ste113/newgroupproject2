import { drizzle } from "drizzle-orm/better-sqlite3";
import { migrate } from "drizzle-orm/better-sqlite3/migrator";
import Database from "better-sqlite3";
import "dotenv/config";

if (!("DATABASE_URL" in process.env)) throw new Error("DATABASE_URL not found in .env");

const main = async () => {
  const betterSqlite = new Database(process.env.DATABASE_URL as string);
  const db = drizzle(betterSqlite);
  migrate(db, { migrationsFolder: "drizzle" });

  console.log("Database migration completed.");
  betterSqlite.close();
  process.exit(0);
};

main();
