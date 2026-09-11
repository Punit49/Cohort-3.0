import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        required: [true, "Name is required"],
        type: String,
        minLength: [3, "Minimum length of name should be 3 characters"],
        maxLength: [15, "Maximum length of name should be 15 characters"]
    }, 
    email: {
        unique: true,
        required: [true, "Email is required"],
        type: String,
        match: [/.+\@.+\..+/, 'Please fill a valid email address'],
    }, 
    passwordHash: {
        type: String,
        required: true
    }, 
    refreshToken: {
        type: String, 
    }
});

const UserModel = mongoose.model("Users", userSchema);

export default UserModel;
