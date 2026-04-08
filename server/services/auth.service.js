import bcrypt from "bcrypt";
import { pool, assertDbConfigured } from "../db/pool.js";
import { HttpError } from "../utils/httpError.js";

const SALT_ROUNDS = 10;

/**
 * @param {{ name: string; email: string; password: string }} input
 */
export async function registerUser({ name, email, password }) {
  assertDbConfigured();

  const emailNorm = email.trim().toLowerCase();
  const nameTrim = name.trim();

  const existing = await pool.query(
    "SELECT id FROM public.users WHERE email = $1",
    [emailNorm]
  );

  if (existing.rows.length > 0) {
    throw new HttpError(409, "This email is already registered");
  }

  const passwordHash = await bcrypt.hash(password, SALT_ROUNDS);

  const result = await pool.query(
    `INSERT INTO public.users (name, email, password_hash)
     VALUES ($1, $2, $3)
     RETURNING id, name, email, created_at`,
    [nameTrim, emailNorm, passwordHash]
  );

  return result.rows[0];
}
