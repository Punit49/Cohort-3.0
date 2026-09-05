import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    caption: {
        type: String,
        required: [true, "Caption is required"],
        max: [50, "Maximum 50 characters are allowed"]
    },
    image: {
        type: String,
        required: [true, "Image is required"],
    }   
}, {
    timestamps: true
})

const PostModel = mongoose.model("Posts", postSchema);

export default PostModel;
