import rateLimit from "express-rate-limit";

export const createRateLimiter = () =>
  rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
    standardHeaders: true
  });