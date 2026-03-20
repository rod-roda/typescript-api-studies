import mongoose from "mongoose";
import type { Connection } from "mongoose";

async function createConnection(): Promise<Connection> /* Funções async sempre retornam um 'Promise'
                                                        usando o <T> Generic, eu defino que o Promise deve seguir
                                                        a estrutura do Connection */
{
    const connectionString = process.env.DB_CONNECTION_STRING;
    
    if (!connectionString) {
        throw new Error("DB_CONNECTION_STRING is not defined in environment variables");
    }

    await mongoose.connect(connectionString);

    return mongoose.connection;
}

export default createConnection;