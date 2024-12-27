import mongoose from "mongoose";
import modelOptions from "./model.options";

export default mongoose.model(
    "Review",
    mongoose.Schema({
        user: {
            type: SchemaType.Types.ObjectId,
            ref: "User",
            required: true
        },
        content: {
            type: String,
            required: true
        },
        mediaType: {
            type: String,
            enum: ["tv", "movie"],
            required: true
        },
        mediaId: {
            type: String,
            required: true
        },
        mediaTitle: {
            type: String,
            required: true
        },
        media: {
            type: String,
            required: true
        },
    }, modelOptions)
)