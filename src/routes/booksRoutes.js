import express from "express";
import BookController from "../controllers/bookController.js";

const routes = express.Router();

routes.get("/books", BookController.listAllBooks);
routes.get("/books/:id", BookController.listBookById);

routes.post("/books", BookController.createBook);

routes.put("/books/:id", BookController.updateBook);

export default routes;
