import express, { request } from "express";
import createConnection from "./config/dbConnection.js";
import routes from "./routes/index.js";
import errorsMiddleware from "./middlewares/errorsMiddleware.js";
import NotFound from "./errors/NotFound.js";

const connection = await createConnection();

connection.on("error", (error) => {
    console.error("Connection Error", error);
});

connection.once("open", () => {
    console.log("Connection with MongoDB successfully done");
});

const app = express();
app.use(express.json()); //Middleware do próprio express para tratar o JSON
routes(app);
 
// Rota não encontrada → 404
app.use((request, response, next) => {
    next(new NotFound());
});

app.use(errorsMiddleware);

export default app;