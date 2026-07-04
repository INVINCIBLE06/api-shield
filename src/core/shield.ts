
import { ShieldOptions } from "./types";
import { normalize } from "../config";

export function shield(options: ShieldOptions) {
    const config = normalize(options);
    // const middlewares = [];
    if (config.rateLimiter && config.rateLimiter.enabled) {
        // middlewares.push(rateLimiter(config.rateLimiter));
    }
    if (config.ipBlocker && config.ipBlocker.enabled) {
        // middlewares.push(ipBlocker(config.ipBlocker));

    }
    if (config.requestLogger && config.requestLogger.enabled) {
        // middlewares.push(requestLogger(config.requestLogger));

    }
    if (config.securityHeaders && config.securityHeaders.enabled) {
        // middlewares.push(securityHeaders(config.securityHeaders));
    }

};