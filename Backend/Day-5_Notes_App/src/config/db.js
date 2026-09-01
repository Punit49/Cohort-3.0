const { default: mongoose } = require("mongoose");
const dotenv = require("dotenv").config();

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/notes-app");
        console.log("MONGODB CONNECTED");
    } catch (error) {
        console.error("Error in DB Connection - ", error.message);
    }
}

module.exports = connectDB; 