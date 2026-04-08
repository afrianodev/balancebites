import * as authService from "../services/auth.service.js";
import { HttpError } from "../utils/httpError.js";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateRegisterBody(body) {
  const { name, email, password } = body ?? {};

  if (typeof name !== "string" || name.trim().length < 1) {
    return { ok: false, message: "Name is required" };
  }
  if (typeof email !== "string" || !EMAIL_RE.test(email.trim())) {
    return { ok: false, message: "A valid email is required" };
  }
  if (typeof password !== "string" || password.length < 8) {
    return {
      ok: false,
      message: "Password must be at least 8 characters",
    };
  }

  return { ok: true, name, email, password };
}

/**
 * POST /api/auth/register
 */
export async function register(req, res, next) {
  try {
    const parsed = validateRegisterBody(req.body);
    if (!parsed.ok) {
      throw new HttpError(400, parsed.message);
    }

    const user = await authService.registerUser({
      name: parsed.name,
      email: parsed.email,
      password: parsed.password,
    });

    res.status(201).json({ user });
  } catch (err) {
    next(err);
  }
}
