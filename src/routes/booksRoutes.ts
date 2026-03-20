import express, { Router } from "express";
import BookController from "../controllers/bookController.js";

const routes: Router = express.Router();

routes.get("/books", BookController.listAllBooks);
routes.get("/books/query", BookController.listBooksByQuery); //abordagem de rota com busca por parâmetros (?param=value)
routes.get("/books/:id", BookController.listBookById);

routes.get("/authors/:id/books", BookController.listBooksByAuthor); //abordagem RESTful de rota aninhada


routes.post("/books", BookController.createBook);

routes.put("/books/:id", BookController.updateBook);

routes.delete("/books/:id", BookController.deleteBook);

export default routes;
