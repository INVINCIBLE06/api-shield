import { ApiShieldOptions } from "./types";

import { createRateLimiter } from "./middleware/rateLimiter/rateLimiter";
import { requestLogger } from "./middleware/logger/requestLogger";
import { securityHeaders } from "./middleware/securityHeaders/securityHeaders";
import { ipBlocker } from "./middleware/ipBlocker/ipBlocker";

export default function apiShield(
  options: ApiShieldOptions = {}
) {
  const middlewares = [];

  if (options.rateLimit) {
    middlewares.push(createRateLimiter());
  }

  if (options.requestLogger) {
    middlewares.push(requestLogger);
  }

  if (options.securityHeaders) {
    middlewares.push(securityHeaders);
  }

  middlewares.push(
    ipBlocker(options.blockedIPs)
  );

  return middlewares;
}