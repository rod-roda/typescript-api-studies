import NotFound from "../errors/NotFound.js";
import type { IBook } from "../models/Book.js";
import {book} from "../models/index.js";

import type { Request, Response, NextFunction } from 'express';
import type { BookQueryParams, MongoBookQuery } from '../types/book.types.js';

class BookController
{
    
    static async listAllBooks(request: Request, response: Response, next: NextFunction)
    {
        try {
            const bookList = await book.find({}).populate("author");
            /*O populate serve para trazer os dados do autor junto com o livro, e não só o ObjectId (o que
            realmente está armazenado no livro)*/
            response.status(200).json(bookList);
        } catch (error: unknown) {
            next(error);
        }
    }

    static async listBookById(request: Request<{id: string}>, response: Response, next: NextFunction)
    {
        try {
            const id = request.params.id;
            const specificBook = await book.findById(id).populate("author");

            if(!specificBook) {
                return next(new NotFound("Book ID not found"));
            }
            
            response.status(200).json(specificBook);
        } catch (error: unknown) {
            next(error);
        }
    }

    static async listBooksByAuthor(request: Request<{id: string}>, response: Response, next: NextFunction)
    {
        try {
            const author_id = request.params.id;
            const booksByAuthor = await book.find({ author: author_id }).populate("author");
            
            response.status(200).json(booksByAuthor);
        } catch (error: unknown) {
            next(error);
        }
    }

    static async createBook(request: Request<unknown,unknown,IBook>, response: Response, next: NextFunction)
    {
        try {
            const newBook = await book.create(request.body);
            response.status(201).json({status: true, message: "New book successfully created", book: newBook});
        } catch (error: unknown) {
            next(error);
        }
    }

    static async updateBook(request: Request<{id: string}>, response: Response, next: NextFunction)
    {
        try {
            const id = request.params.id;
            const updatedBook = await book.findByIdAndUpdate(id, request.body);

            if(updatedBook == null){
                return next(new NotFound('Book ID not found'));
            }
            
            response.status(200).json(updatedBook);
        } catch (error: unknown) {
            next(error);
        }
    }

    static async deleteBook(request: Request<{id: string}>, response: Response, next: NextFunction)
    {
        try {
            const id = request.params.id;
            const deletedBook = await book.findByIdAndDelete(id);

            if(deletedBook == null){
                return next(new NotFound('Book ID not found'));
            }
            
            response.status(200).send("Your book was successfully deleted");
        } catch (error: unknown) {
            next(error);
        }
    }

    static async listBooksByQuery(request: Request<unknown, unknown, unknown, BookQueryParams>, response: Response, next: NextFunction)
                                //parâmetros do tipo Request: Request<Params, ResBody, ReqBody, ReqQuery, Locals>
    {
        const query: MongoBookQuery = {};
        if(request.query.publisher) query.publisher = request.query.publisher;
        if(request.query.title) query.title = { $regex: request.query.title, $options: "i" };
        
        // Inicializa pages se minPages ou maxPages existirem
        if(request.query.minPages || request.query.maxPages) {
            query.pages = {};
        }
        
        if(request.query.minPages && query.pages) {
            query.pages.$gte = Number(request.query.minPages); //os dados vem da query como String
        }
        
        if(request.query.maxPages && query.pages) {
            query.pages.$lte = Number(request.query.maxPages);
        }

        try {
            const booksByQuery = await book.find(query);
            response.status(200).json({booksByQuery});

        } catch (error: unknown) {
            next(error);
        }
    }

};

export default BookController;