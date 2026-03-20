import DefaultError from "./DefaultError.js";

class BadRequest extends DefaultError
{
    constructor(message: string = "Data submitted in an invalid format")
    {
        super(message, 400);
    }
}

export default BadRequest;