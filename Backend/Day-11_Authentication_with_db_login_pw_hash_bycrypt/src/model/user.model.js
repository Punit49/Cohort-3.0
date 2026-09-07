import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxLength: 10
    },
    email: {
        type: String, 
        required: true,
    }, 
    password: {
        type: String,
        required: true,
        select: false
    }
});

const UserModel = mongoose.model("User", userSchema);

export default UserModel;