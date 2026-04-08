import { HttpError } from "../utils/httpError.js";

/**
 * @param {import('express').ErrorRequestHandler} err
 */
export function errorHandler(err, _req, res, _next) {
  if (err instanceof HttpError) {
    return res.status(err.statusCode).json({ error: err.message });
  }

  console.error(err);
  return res.status(500).json({ error: "Internal server error" });
}
