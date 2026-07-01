import type { RequestHandler } from "express";
import { ShieldOptions } from "./types";
import { normalize } from "../config";

export function shield(options: ShieldOptions): RequestHandler {
    const config = normalize(options);
    return (req, res, next) => {
        // TODO:
        // Load Middlewares
        next();
    };
}