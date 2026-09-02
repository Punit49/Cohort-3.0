const { default: mongoose } = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_CONNECTION_URL);
        console.log("Database connected");
    } catch (error) {
        console.error("Error in mongodb connection");
    }
}

module.exports = connectDB;