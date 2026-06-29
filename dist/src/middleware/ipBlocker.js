"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ipBlocker = void 0;
const ipBlocker = (blockedIPs = []) => {
    return (req, res, next) => {
        if (blockedIPs.includes(req.ip || "")) {
            return res.status(403).json({
                success: false,
                message: "Access denied"
            });
        }
        next();
    };
};
exports.ipBlocker = ipBlocker;
