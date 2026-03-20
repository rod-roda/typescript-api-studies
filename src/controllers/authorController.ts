import NotFound from "../errors/NotFound.js";
import type { IAuthor } from "../models/Author.js";
import {author} from "../models/index.js";

import type { Request, Response, NextFunction } from 'express';

class AuthorController
{

    static async listAllAuthors(request: Request, response: Response, next: NextFunction): Promise<void>
    {
        try {
            const authorList: IAuthor[] = await author.find({});
            response.status(200).json(authorList);
        } catch (error: unknown) {
            next(error);
        }
    }

    static async listAuthorById(request: Request<{id: string}>, response: Response, next: NextFunction): Promise<void>
    {
        try {
            const id: string = request.params.id;
            const specificAuthor: IAuthor | null = await author.findById(id);

            if(!specificAuthor) {
                return next(new NotFound('Author ID not found'));
            }

            response.status(200).json(specificAuthor);
        } catch (error: unknown) {
            next(error);
        }
    }

    static async createAuthor(request: Request<{}, {}, IAuthor>, response: Response, next: NextFunction): Promise<void>
    {
        try {
            const newAuthor: IAuthor = await author.create(request.body);
            response.status(201).json({status: true, message: "New author successfully created", author: newAuthor});
        } catch (error: unknown) {
            next(error);
        }
    }

    static async updateAuthor(request: Request<{ id: string}>, response: Response, next: NextFunction): Promise<void>
    {
        try {
            const id: string = request.params.id;
            const updatedAuthor: IAuthor | null = await author.findByIdAndUpdate(id, request.body);

            if (updatedAuthor == null){
                return next(new NotFound('Author ID not found'));
            }
            
            response.status(200).json(updatedAuthor);
        } catch (error: unknown) {
            next(error);
        }
    }

    static async deleteAuthor(request: Request<{id: string}>, response: Response, next: NextFunction): Promise<void>
    {
        try {
            const id: string = request.params.id;
            const deletedAuthor: IAuthor | null = await author.findByIdAndDelete(id);

            if(deletedAuthor == null){
                return next(new NotFound('Author ID not found'));
            }
            
            response.status(200).send("The author was successfully deleted");
        } catch (error: unknown) {
            next(error);
        }
    }

};

export default AuthorController;