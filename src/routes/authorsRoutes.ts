import express, { Router } from "express";
import AuthorController from "../controllers/authorController.js";

const routes: Router = express.Router();

routes.get("/authors", AuthorController.listAllAuthors);
routes.get("/authors/:id", AuthorController.listAuthorById);

routes.post("/authors", AuthorController.createAuthor);

routes.put("/authors/:id", AuthorController.updateAuthor);

routes.delete("/authors/:id", AuthorController.deleteAuthor);

export default routes;
