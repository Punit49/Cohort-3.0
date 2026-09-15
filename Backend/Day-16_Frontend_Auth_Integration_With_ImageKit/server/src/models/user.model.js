import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true, 
        minlength: 3
    },
    email: {
        type: String,
        required: true, 
    },
    passwordHash: {
        type: String,
        required: true, 
    },
    profilePic: {
        type: String,
        default: "https://ik.imagekit.io/punit404/avatar.jpg"
    },
    refreshToken: {
        type: String,
    }
})

const UserModel = mongoose.model("Users", userSchema);
export default UserModel;