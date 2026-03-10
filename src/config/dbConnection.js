import mongoose from "mongoose";

async function createConnection()
{
    mongoose.connect(process.env.DB_CONNECTION_STRING);

    return mongoose.connection;
}

export default createConnection;