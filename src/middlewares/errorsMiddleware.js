import mongoose from "mongoose";
import DefaultError from "../errors/DefaultError.js";
import BadRequest from "../errors/BadRequest.js";
import ValidationError from "../errors/ValidationError.js";
import NotFound from "../errors/NotFound.js";

// eslint-disable-next-line no-unused-vars
function errorsMiddleware(error, request, response, next) { //Middleware de erro
    if (error instanceof mongoose.Error.CastError) {
        new BadRequest().sendResponse(response);
    }else if(error instanceof mongoose.Error.ValidationError){
        new ValidationError(error).sendResponse(response);
    }else if (error instanceof NotFound){
        error.sendResponse(response);   
    }

    new DefaultError().sendResponse(response);
}

export default errorsMiddleware;