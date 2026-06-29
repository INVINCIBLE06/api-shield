"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = apiShield;
const rateLimiter_1 = require("./middleware/rateLimiter");
const requestLogger_1 = require("./middleware/requestLogger");
const securityHeaders_1 = require("./middleware/securityHeaders");
const ipBlocker_1 = require("./middleware/ipBlocker");
function apiShield(options = {}) {
    const middlewares = [];
    if (options.rateLimit) {
        middlewares.push((0, rateLimiter_1.createRateLimiter)());
    }
    if (options.requestLogger) {
        middlewares.push(requestLogger_1.requestLogger);
    }
    if (options.securityHeaders) {
        middlewares.push(securityHeaders_1.securityHeaders);
    }
    middlewares.push((0, ipBlocker_1.ipBlocker)(options.blockedIPs));
    return middlewares;
}
