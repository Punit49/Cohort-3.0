import imageKit from "../config/imagekit.config.js";
import PostModel from "../models/post.model.js";

const postController = async (req, res) => {
    try {
        const { caption } = req.body;
        const file = req.file;

        if (!caption || !file) {
            return res.status(400).json({
                message: "Incomplete Data"
            })
        }

        const uploadedFile = await imageKit.upload({
            file: file.buffer,
            fileName: file.originalname,
            folder: 'myPosts'
        });

        console.log(uploadedFile);

        const postData = await PostModel.create({
            caption,
            image: uploadedFile.url
        });

        return res.status(201).json({
            message: "Post Created Succesfully",
            data: postData,
            file
        })
    } catch (error) {
        console.error("Error in creating post - ", error.message);
        return res.status(500).json({
            message: `Server Error - ${error.message}`,
        })
    }
}

export {
    postController
}