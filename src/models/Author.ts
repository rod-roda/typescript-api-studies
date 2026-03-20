import mongoose, { Document } from "mongoose";

export interface IAuthor extends Document
{
    name: string;
    nationality?: string;
}

const authorSchema = new mongoose.Schema<IAuthor>({
    name: { 
        type: String, 
        required: [true, "The author name is required"] //segunda posição do array é uma mensagem de erro personalizada
    },
    nationality: { type: String }
}, { versionKey: false });

const author = mongoose.model<IAuthor>("authors", authorSchema);

export default author;
