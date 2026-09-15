import dotenv from "dotenv"
dotenv.config();

const config = {
    PORT: process.env.PORT ,
    MONGO_URI: process.env.MONGO_URI ,
    ACCESS_TOKEN_KEY: process.env.ACCESS_TOKEN_KEY ,
    REFRESH_TOKEN_KEY: process.env.REFRESH_TOKEN_KEY
}

export default config;