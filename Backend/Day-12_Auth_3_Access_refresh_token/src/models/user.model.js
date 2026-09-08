import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is Required"]
    }, 
    email: {
        type: String,
        required: [true, "Email is required"]
    },
    password: {
        type: String,
        required: [true, "Password is required"], 
        select: false
    }
})

const UserModel = mongoose.model("Users", userSchema);

export default UserModel;