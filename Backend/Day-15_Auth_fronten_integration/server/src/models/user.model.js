import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: [true, "Name is required"],
        minLength: [3, "Minimum length of name should be 3"]
    },
    email: {
        type: String, 
        required: [true, "Email is required"],
        match: [/.+\@.+\..+/, 'Please fill a valid email address'],
    },
    passwordHash: {
        type: String, 
        required: [true, "Password is required"],
    },
    refreshToken: {
        type: String, 
    }
})

const UserModel = mongoose.model("Users", userSchema);
export default UserModel;