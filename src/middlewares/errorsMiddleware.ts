import mongoose from "mongoose";
import DefaultError from "../errors/DefaultError.js";
import BadRequest from "../errors/BadRequest.js";
import ValidationError from "../errors/ValidationError.js";
import NotFound from "../errors/NotFound.js";

import type { Request, Response, NextFunction } from 'express';

// eslint-disable-next-line no-unused-vars
function errorsMiddleware(error: unknown, request: Request, response: Response, next: NextFunction): void { //Middleware de erro
    if (error instanceof mongoose.Error.CastError) {
        new BadRequest().sendResponse(response);
    } else if(error instanceof mongoose.Error.ValidationError){
        new ValidationError(error).sendResponse(response);
    } else if (error instanceof NotFound){
        error.sendResponse(response);   
    } else {
        new DefaultError().sendResponse(response);
    }
}

export default errorsMiddleware;