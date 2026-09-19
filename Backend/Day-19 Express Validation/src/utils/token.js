import jwt from "jsonwebtoken"
import config from "../config/dotenv.config.js"

const generateToken = (id) => {
    return {
        accessToken: jwt.sign({id}, config.ACCESS_TOKEN_KEY, {expiresIn: "15m"}),
        refreshToken: jwt.sign({id}, config.REFRESH_TOKEN_KEY, {expiresIn: "7d"})
    }
}

export {
    generateToken
}