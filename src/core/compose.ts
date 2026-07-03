import { NextFunction, Request, Response } from "express";

export function compose(req: Request, res: Response, next: NextFunction) {


    next();
}