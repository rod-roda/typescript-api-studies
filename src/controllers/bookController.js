import NotFound from "../errors/NotFound.js";
import book from "../models/Book.js";

class BookController
{

    static async listAllBooks(request, response, next)
    {
        try {
            const bookList = await book.find({}).populate("author");
            /*O populate serve para trazer os dados do autor junto com o livro, e não só o ObjectId (o que
            realmente está armazenado no livro)*/
            response.status(200).json(bookList);
        } catch (error) {
            next(error);
        }
    }

    static async listBookById(request, response, next)
    {
        try {
            const id = request.params.id;
            const specificBook = await book.findById(id).populate("author");

            if(!specificBook) {
                next(new NotFound("Book ID not found"));
            }
            
            response.status(200).json(specificBook);
        } catch (error) {
            next(error);
        }
    }

    static async listBooksByAuthor(request, response, next)
    {
        try {
            const author_id = request.params.id;
            const booksByAuthor = await book.find({ author: author_id }).populate("author");
            
            response.status(200).json(booksByAuthor);
        } catch (error) {
            next(error);
        }
    }

    static async createBook(request, response, next)
    {
        try {
            const newBook = await book.create(request.body);
            response.status(201).json({status: true, message: "New book successfully created", book: newBook});
        } catch (error) {
            next(error);
        }
    }

    static async updateBook(request, response, next)
    {
        try {
            const id = request.params.id;
            const updatedBook = await book.findByIdAndUpdate(id, request.body);

            if(updatedBook == null){
                next(new NotFound('Book ID not found'));
            }
            
            response.status(200).json(updatedBook);
        } catch (error) {
            next(error);
        }
    }

    static async deleteBook(request, response, next)
    {
        try {
            const id = request.params.id;
            const deletedBook = await book.findByIdAndDelete(id);

            if(deletedBook == null){
                next(new NotFound('Book ID not found'));
            }
            
            response.status(200).send("Your book was successfully deleted");
        } catch (error) {
            next(error);
        }
    }

    static async listBooksByPublisher(request, response, next)
    {
        const publisher = request.query.publisher;
        try {
            const booksByPublisher = await book.find({ publisher: publisher});
            response.status(200).json({booksByPublisher});

        } catch (error) {
            next(error);
        }
    }

};

export default BookController;