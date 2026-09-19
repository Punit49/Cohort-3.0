import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    email: {
        type: String, 
        required: true,
        unique: true
    }, 
    phone: {
        type: String, 
        required: true,
        unique: true
    },
    passwordHash: {
        type: String, 
        required: true,
    }, 
    refreshToken: {
        type: String
    }
})

const UserModel = mongoose.model("User", userSchema);

export default UserModel;