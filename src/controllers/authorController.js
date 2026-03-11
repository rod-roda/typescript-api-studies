import author from "../models/Author.js";

class AuthorController
{

    static async listAllAuthors(request, response)
    {
        try {
            const authorList = await author.find({});
            response.status(200).json(authorList);
        } catch (error) {
            response.status(500).json({status: false, message: `${error.message} - fail to get authors`});
        }
    }

    static async listAuthorById(request, response)
    {
        try {
            const specificAuthor = await author.findById(request.params.id);
            response.status(200).json(specificAuthor);
        } catch (error) {
            response.status(500).json({status: false, message: `${error.message} - fail to get the author`});
        }
    }

    static async createAuthor(request, response)
    {
        try {
            const newAuthor = await author.create(request.body);
            response.status(201).json({status: true, message: "New author successfully created", author: newAuthor});
        } catch (error) {
            response.status(500).json({status: false, message: `${error.message} - fail to add the author`});
        }
    }

    static async updateAuthor(request, response)
    {
        try {
            const updatedAuthor = await author.findByIdAndUpdate(request.params.id, request.body);
            response.status(200).json(updatedAuthor);
        } catch (error) {
            response.status(500).json({status: false, message: `${error.message} - fail to update the author`});
        }
    }

    static async deleteAuthor(request, response)
    {
        try {
            await author.findByIdAndDelete(request.params.id);
            response.status(200).send("The author was successfully deleted");
        } catch (error) {
            response.status(500).json({status: false, message: `${error.message} - fail to delete the author`});
        }
    }

};

export default AuthorController;