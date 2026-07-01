export interface RateLimiterOptions {
  enabled?: boolean;
  maxRequests?: number;
  windowMs?: number;
}

export interface RequestLoggerOptions {
  enabled?: boolean;
}

export interface SecurityHeadersOptions {
  enabled?: boolean;
}

export interface IpBlockerOptions {
  enabled?: boolean;
  blockedIPs?: string[];
}

export interface ShieldOptions {
  rateLimiter?: RateLimiterOptions;
  requestLogger?: RequestLoggerOptions;
  securityHeaders?: SecurityHeadersOptions;
  ipBlocker?: IpBlockerOptions;
}