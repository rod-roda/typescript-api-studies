import BadRequest from "./BadRequest.js";
import mongoose from "mongoose";

class ValidationError extends BadRequest
{
    constructor(error: mongoose.Error.ValidationError)
    {
        const errorMessage = Object.values(error.errors)
            .map(err => err.message)
            .join("; ");
        
        super(`The following errors ocurred: ${errorMessage}`);
    }
}

export default ValidationError;