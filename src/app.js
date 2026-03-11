import express from "express";
import createConnection from "./config/dbConnection.js";
import routes from "./routes/index.js";

const connection = await createConnection();

connection.on("error", (error) => {
    console.error("Connection Error", error);
});

connection.once("open", () => {
    console.log("Connection with MongoDB successfully done");
});

const app = express();
routes(app);
// app.use(express.json()); //Middleware do próprio express para tratar o JSON

export default app;

//mongodb+srv://admin_db:admin_db_123@cluster0.ydal11c.mongodb.net/?appName=Cluster0