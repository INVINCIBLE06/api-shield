import { ApiShieldOptions } from "./types";
export default function apiShield(options?: ApiShieldOptions): ((req: import("express").Request, res: import("express").Response, next: import("express").NextFunction) => void)[];
