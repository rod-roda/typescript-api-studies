import mongoose from "mongoose";

mongoose.Schema.Types.String.set("validate", {
    validator: (value: string) => value.trim() !== "",
    message: "The {PATH} field can't be empty"
});