import { ShieldOptions } from "../core/types";
import { DEFAULT_IP_BLOCKER, DEFAULT_RATE_LIMITER_OPTIONS, DEFAULT_REQUEST_LOGGER, DEFAULT_SECURITY_HEADER } from "./defaults";

export function normalize(options: ShieldOptions): ShieldOptions {
  return {
    rateLimiter: {
      ...DEFAULT_RATE_LIMITER_OPTIONS,
      ...options.rateLimiter,
    },

    requestLogger: {
      ...options.requestLogger, ...DEFAULT_REQUEST_LOGGER
    },

    securityHeaders: {
      ...options.securityHeaders, ...DEFAULT_SECURITY_HEADER,
    },

    ipBlocker: {
      ...options.ipBlocker, ...DEFAULT_IP_BLOCKER,
    },
  };
}