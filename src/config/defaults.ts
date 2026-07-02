import type { IpBlockerOptions, RateLimiterOptions, RequestLoggerOptions, SecurityHeadersOptions } from "../core/types"

export const DEFAULT_RATE_LIMITER_OPTIONS: RateLimiterOptions = {
    enabled: false,
    maxRequests: 100,
    windowMs: 60_000,
}

export const DEFAULT_REQUEST_LOGGER: RequestLoggerOptions = {
    enabled: false,
}

export const DEFAULT_SECURITY_HEADER: SecurityHeadersOptions = {
    enabled: false,
}

export const DEFAULT_IP_BLOCKER: IpBlockerOptions = {
    enabled: false,
    blockedIPs: []
}