import BadRequest from "./BadRequest.js";

class ValidationError extends BadRequest
{
    constructor(error)
    {
        const errorMessage = Object.values(error.errors)
            .map(error => error.message)
            .join("; ");
        
        super(`The following errors ocurred: ${errorMessage}`);
    }
}

export default ValidationError;