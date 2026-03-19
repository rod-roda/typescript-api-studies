import NotFound from "../errors/NotFound.js";
import {author} from "../models/index.js";

class AuthorController
{

    static async listAllAuthors(request, response, next)
    {
        try {
            const authorList = await author.find({});
            response.status(200).json(authorList);
        } catch (error) {
            next(error);
        }
    }

    static async listAuthorById(request, response, next)
    {
        try {
            const id = request.params.id;
            const specificAuthor = await author.findById(id);

            if(!specificAuthor) {
                next(new NotFound('Author ID not found'));
            }

            response.status(200).json(specificAuthor);
        } catch (error) {
            next(error);
        }
    }

    static async createAuthor(request, response, next)
    {
        try {
            const newAuthor = await author.create(request.body);
            response.status(201).json({status: true, message: "New author successfully created", author: newAuthor});
        } catch (error) {
            next(error);
        }
    }

    static async updateAuthor(request, response, next)
    {
        try {
            const id = request.params.id;
            const updatedAuthor = await author.findByIdAndUpdate(id, request.body);

            if (updatedAuthor == null){
                next(new NotFound('Author ID not found'));
            }
            
            response.status(200).json(updatedAuthor);
        } catch (error) {
            next(error);
        }
    }

    static async deleteAuthor(request, response, next)
    {
        try {
            const id = request.params.id;
            const deletedAuthor = await author.findByIdAndDelete(id);

            if(deletedAuthor == null){
                next(new NotFound('Author ID not found'));
            }
            
            response.status(200).send("The author was successfully deleted");
        } catch (error) {
            next(error);
        }
    }

};

export default AuthorController;