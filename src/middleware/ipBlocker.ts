import { Request, Response, NextFunction } from "express";

export const ipBlocker = (
  blockedIPs: string[] = []
) => {
  return (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    if (blockedIPs.includes(req.ip || "")) {
      return res.status(403).json({
        success: false,
        message: "Access denied"
      });
    }

    next();
  };
};