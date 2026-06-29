export interface ApiShieldOptions {
    rateLimit?: boolean;
    requestLogger?: boolean;
    securityHeaders?: boolean;
    blockedIPs?: string[];
}
