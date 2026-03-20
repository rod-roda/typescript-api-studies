import express from "express";
import type { Request, Response, Express } from "express";
import books from "./booksRoutes.js";
import authors from "./authorsRoutes.js";

const routes = (app: Express): void => {
    app.route("/").get((request: Request, response: Response) => {
        response.status(200).send('Curso de Node.js');
    });

    app.use(express.json(), books, authors);
};

export default routes;