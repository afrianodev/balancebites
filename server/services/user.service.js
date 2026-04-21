import bcrypt from "bcrypt";
import { pool, assertDbConfigured } from "../db/pool.js";
import { HttpError } from "../utils/httpError.js";

const SALT_ROUNDS = 10;

/**
 * @param {string} id
 * @param {{ name?: string; email?: string }} patch
 */
export async function updateUserById(id, { name, email }) {
  assertDbConfigured();

  const updates = [];
  const values = [];
  let paramIndex = 1;

  if (name !== undefined) {
    const nameTrim = name.trim();
    if (nameTrim.length < 1) {
      throw new HttpError(400, "Name cannot be empty");
    }
    updates.push(`name = $${paramIndex++}`);
    values.push(nameTrim);
  }

  if (email !== undefined) {
    const emailNorm = email.trim().toLowerCase();
    const taken = await pool.query(
      "SELECT id FROM public.users WHERE email = $1 AND id <> $2",
      [emailNorm, id]
    );
    if (taken.rows.length > 0) {
      throw new HttpError(409, "This email is already in use");
    }
    updates.push(`email = $${paramIndex++}`);
    values.push(emailNorm);
  }

  if (updates.length === 0) {
    throw new HttpError(400, "No fields to update");
  }

  values.push(id);
  const result = await pool.query(
    `UPDATE public.users
     SET ${updates.join(", ")}
     WHERE id = $${paramIndex}
     RETURNING id, name, email, created_at`,
    values
  );

  if (result.rows.length === 0) {
    throw new HttpError(404, "User not found");
  }

  return result.rows[0];
}

/**
 * @param {string} id
 */
export async function deleteUserById(id) {
  assertDbConfigured();

  const result = await pool.query(
    "DELETE FROM public.users WHERE id = $1 RETURNING id, name, email",
    [id]
  );

  if (result.rows.length === 0) {
    throw new HttpError(404, "User not found");
  }

  return result.rows[0];
}

/**
 * @param {string} id
 * @param {string} currentPassword
 * @param {string} newPassword
 */
export async function changePasswordById(id, currentPassword, newPassword) {
  assertDbConfigured();

  const found = await pool.query(
    "SELECT id, password_hash FROM public.users WHERE id = $1",
    [id]
  );

  if (found.rows.length === 0) {
    throw new HttpError(404, "User not found");
  }

  const { password_hash: passwordHash } = found.rows[0];
  const match = await bcrypt.compare(currentPassword, passwordHash);
  if (!match) {
    throw new HttpError(401, "Current password is incorrect");
  }

  const newHash = await bcrypt.hash(newPassword, SALT_ROUNDS);

  await pool.query(
    "UPDATE public.users SET password_hash = $1 WHERE id = $2",
    [newHash, id]
  );

  return { ok: true };
}
