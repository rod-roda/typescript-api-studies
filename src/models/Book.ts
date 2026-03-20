import mongoose, { Document, Types } from "mongoose";
import type { IAuthor } from "./Author.js";

export interface IBook extends Document
{
    title: string;
    publisher: string;
    price?: number;
    pages?: number;
    author: Types.ObjectId | IAuthor; // Pode ser ObjectId ou o documento populado
}

const bookSchema = new mongoose.Schema<IBook>({
    title: { 
        type: String, 
        required: [true, "The book title is required"]
    },
    publisher: { 
        type: String, 
        required: [true, "The book publisher is required"],
    },
    price: { 
        type: Number,
        enum: {
            values: [25, 40, 55, 65],
            message: 'The book price is out of the pre-determinated values'
        }
    },
    pages: { 
        type: Number,
        min: [10, "{VALUES} pages is less than the minimum (10 pages)"],
        max: [2000, "{VALUES} pages is greater than the maximum (2000 pages)"]
        // validate: {
        //     validator: (value) => {
        //         return value >= 10 && value <= 2000;                >>>>> Validação personalizada com mongoose
        //     },
        //     message: "The number of pages must be between 10 and 5000 pages"
        // }
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "authors",
        required: [true, "The book author is required"]
    }
}, { versionKey: false });

const book = mongoose.model<IBook>("books", bookSchema);

export default book;