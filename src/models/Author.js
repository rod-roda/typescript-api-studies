import mongoose from "mongoose";

const authorSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    name: { 
        type: mongoose.Schema.Types.String, 
        required: [true, "The author name is required"] //segunda posição do array é uma mensagem de erro personalizada
    },
    nationality: { type: mongoose.Schema.Types.String }
}, { versionKey: false });

const author = mongoose.model("authors", authorSchema);

export default author;
