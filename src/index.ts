import { ApiShieldOptions } from "./types";

import { createRateLimiter } from "./middleware/rateLimiter";
import { requestLogger } from "./middleware/requestLogger";
import { securityHeaders } from "./middleware/securityHeaders";
import { ipBlocker } from "./middleware/ipBlocker";

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