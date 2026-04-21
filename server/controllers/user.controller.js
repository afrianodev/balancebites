import * as userService from "../services/user.service.js";
import { HttpError } from "../utils/httpError.js";
import { isValidUuid } from "../utils/uuid.js";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function parseId(req) {
  const { id } = req.params;
  if (!isValidUuid(id)) {
    throw new HttpError(400, "Invalid user id");
  }
  return id;
}

/**
 * PATCH /api/users/:id
 * Body: { "name"?: string, "email"?: string } — at least one field required.
 */
export async function updateUser(req, res, next) {
  try {
    const id = parseId(req);
    const { name, email } = req.body ?? {};

    const hasName = name !== undefined;
    const hasEmail = email !== undefined;

    if (!hasName && !hasEmail) {
      throw new HttpError(400, "Provide at least one of: name, email");
    }

    if (hasName && typeof name !== "string") {
      throw new HttpError(400, "Name must be a string");
    }
    if (hasEmail) {
      if (typeof email !== "string" || !EMAIL_RE.test(email.trim())) {
        throw new HttpError(400, "A valid email is required");
      }
    }

    const user = await userService.updateUserById(id, {
      ...(hasName ? { name } : {}),
      ...(hasEmail ? { email } : {}),
    });

    res.json({ user });
  } catch (err) {
    next(err);
  }
}

/**
 * DELETE /api/users/:id
 */
export async function deleteUser(req, res, next) {
  try {
    const id = parseId(req);
    const deleted = await userService.deleteUserById(id);
    res.json({ deleted });
  } catch (err) {
    next(err);
  }
}

/**
 * PATCH /api/users/:id/password
 * Body: { "currentPassword": string, "newPassword": string }
 */
export async function changePassword(req, res, next) {
  try {
    const id = parseId(req);
    const { currentPassword, newPassword } = req.body ?? {};

    if (typeof currentPassword !== "string" || currentPassword.length < 1) {
      throw new HttpError(400, "currentPassword is required");
    }
    if (typeof newPassword !== "string" || newPassword.length < 8) {
      throw new HttpError(
        400,
        "newPassword must be at least 8 characters"
      );
    }
    if (currentPassword === newPassword) {
      throw new HttpError(
        400,
        "New password must be different from current password"
      );
    }

    const result = await userService.changePasswordById(
      id,
      currentPassword,
      newPassword
    );

    res.json(result);
  } catch (err) {
    next(err);
  }
}
