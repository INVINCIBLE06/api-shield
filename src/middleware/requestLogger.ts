import { Request, Response, NextFunction } from "express";

export const requestLogger = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log(
    `[API-SHIELD] ${req.method} ${req.originalUrl}`
  );

  next();
};