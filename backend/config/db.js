import { Pool } from "pg";
import dotenv from "dotenv";
import process from "node:process";

dotenv.config(); // Load environment variables

// Ensure 'process' exists in all environments
if (typeof process === "undefined") {
  globalThis.process = { env: {} };
  console.warn(
    "Warning: 'process' is not defined. A mock process object has been created."
  );
} else if (!process.env) {
  process.env = {};
  console.warn(
    "Warning: 'process.env' is not defined. A mock environment object has been created."
  );
}

// Create PostgreSQL connection pool
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,
  port: process.env.DB_PORT ? Number(process.env.DB_PORT) : 5432, // Ensure port is a number
  ssl: process.env.DB_SSL === "true" ? { rejectUnauthorized: false } : false, // Handle SSL if needed
});

export default pool;
