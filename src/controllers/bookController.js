import book from "../models/Book.js";

class BookController
{

    static async listAllBooks(request, response)
    {
        try {
            const bookList = await book.find({}).populate("author");
            /*O populate serve para trazer os dados do autor junto com o livro, e não só o ObjectId (o que
            realmente está armazenado no livro)*/
            response.status(200).json(bookList);
        } catch (error) {
            response.status(500).json({status: false, message: `${error.message} - fail to get your books`});
        }
    }

    static async listBookById(request, response)
    {
        try {
            const specificBook = await book.findById(request.params.id).populate("author");
            response.status(200).json(specificBook);
        } catch (error) {
            response.status(500).json({status: false, message: `${error.message} - fail to get your book`});
        }
    }

    static async listBooksByAuthor(request, response)
    {
        try {
            const booksByAuthor = await book.find({ author: request.params.id }).populate("author");
            response.status(200).json(booksByAuthor);
        } catch (error) {
            response.status(500).json({status: false, message: `${error.message} - fail to get books by author`});
        }
    }

    static async createBook(request, response)
    {
        try {
            const newBook = await book.create(request.body);
            response.status(201).json({status: true, message: "New book successfully created", book: newBook});
        } catch (error) {
            response.status(500).json({status: false, message: `${error.message} - fail to add your book`});
        }
    }

    static async updateBook(request, response)
    {
        try {
            const updatedBook = await book.findByIdAndUpdate(request.params.id, request.body);
            response.status(200).json(updatedBook);
        } catch (error) {
            response.status(500).json({status: false, message: `${error.message} - fail to update your book`});
        }
    }

    static async deleteBook(request, response)
    {
        try {
            await book.findByIdAndDelete(request.params.id);
            response.status(200).send("Your book was successfully deleted");
        } catch (error) {
            response.status(500).json({status: false, message: `${error.message} - fail to delete your book`});
        }
    }

};

export default BookController;