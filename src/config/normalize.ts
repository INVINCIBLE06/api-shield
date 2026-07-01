import { ShieldOptions } from "../core/types";
import { DEFAULT_RATE_LIMIT } from "./defaults";

export function normalize(options: ShieldOptions): ShieldOptions {
  return {
    rateLimiter: {
      ...DEFAULT_RATE_LIMIT,
      ...options.rateLimiter,
    },

    requestLogger: {
      enabled: options.requestLogger?.enabled ?? false,
    },

    securityHeaders: {
      enabled: options.securityHeaders?.enabled ?? false,
    },

    ipBlocker: {
      enabled: options.ipBlocker?.enabled ?? false,
    },
  };
}