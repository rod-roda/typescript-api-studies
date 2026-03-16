import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    title: { 
        type: mongoose.Schema.Types.String, 
        required: [true, "The book title is required"]
    },
    publisher: { 
        type: mongoose.Schema.Types.String, 
        required: [true, "The book publisher is required"] 
    },
    price: { type: mongoose.Schema.Types.Number },
    pages: { type: mongoose.Schema.Types.Number },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "authors",
        required: [true, "The book author is required"]
    }
}, { versionKey: false });

const book = mongoose.model("books", bookSchema);

export default book;