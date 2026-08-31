const mongoose = require("mongoose");
const dotenv = require('dotenv').config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_CONNECTION_URL);
        console.log("DB Connected");        
    } catch (error) {
        console.error("Error - ", error);
    }
}

module.exports = connectDB;