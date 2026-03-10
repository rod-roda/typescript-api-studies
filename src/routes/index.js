import express from "express";
import books from "./booksRoutes.js";

const routes = (app) => {
    app.route("/").get((request, response) => {
        response.status(200).send('Curso de Node.js');
    });

    app.use(express.json(), books);
};

export default routes;