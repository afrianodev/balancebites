import pg from "pg";
import { HttpError } from "../utils/httpError.js";

const { Pool } = pg;

function buildPoolConfig() {
  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) {
    return null;
  }
  /** Managed Postgres (Supabase, Neon, etc.) suele requerir TLS. */
  const useSsl =
    process.env.DATABASE_SSL !== "false" &&
    (connectionString.includes("supabase") ||
      connectionString.includes("neon.tech") ||
      process.env.DATABASE_SSL === "true");

  return {
    connectionString,
    max: 10,
    ...(useSsl ? { ssl: { rejectUnauthorized: false } } : {}),
  };
}

const config = buildPoolConfig();

export const pool = config ? new Pool(config) : null;

export function assertDbConfigured() {
  if (!pool) {
    throw new HttpError(
      503,
      "Database is not configured. Set DATABASE_URL in server/.env (see server/.env.example)."
    );
  }
}
