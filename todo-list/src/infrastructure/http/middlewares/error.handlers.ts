import { NextFunction } from "express";
import { logger } from "../../database/mongodb/logger/pino.logger";


export const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
    logger.error({
        message: err.message,
        stack: err.stack,
        path: err.path,
        method: err.method,
        body: req.body
    });
    
}