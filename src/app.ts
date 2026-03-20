import express from "express";
import createConnection from "./config/dbConnection.js";
import routes from "./routes/index.js";
import errorsMiddleware from "./middlewares/errorsMiddleware.js";
import NotFound from "./errors/NotFound.js";

import type { Request, Response, NextFunction } from "express";
import type { Connection } from "mongoose";

const connection: Connection = await createConnection();

connection.on("error", (error: Error): void => {
    console.error("Connection Error", error);
});

connection.once("open", (): void => {
    console.log("Connection with MongoDB successfully done");
});

const app = express();
app.use(express.json()); //Middleware do próprio express para tratar o JSON
routes(app);
 
// Rota não encontrada → 404
app.use((request: Request, response: Response, next: NextFunction) => {
    next(new NotFound());
});

app.use(errorsMiddleware);

export default app;