import mongoose from "mongoose";
import modelOptions from "./model.options";

export default mongoose.model(
    "Favourite",
    mongoose.Schema({
        user: {
            type: SchemaType.Types.ObjectId,
            ref: "User",
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
        mediaPoster: {
            type: String,
            required: true
        },
        mediaRate: {
            type: Number,
            required: true
        },
    }, modelOptions)
)