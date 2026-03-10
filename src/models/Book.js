import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    title: { type: mongoose.Schema.Types.String, requred: true },
    publisher: { type: mongoose.Schema.Types.String },
    price: { type: mongoose.Schema.Types.Number },
    pages: { type: mongoose.Schema.Types.Number }
}, { versionKey: false });

const book = mongoose.model("books", bookSchema);

export default book;