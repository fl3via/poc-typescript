import { NextFunction, Request, Response,  } from "express";
import httpStatus from "http-status"

export function errorHandler(error: Error, req: Request, res: Response, next: NextFunction) {
    res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR)
}