import jwt from "jsonwebtoken";
import config from "../config/dotenv.config.js";

export const generateTokens = (id) => {
    return {
        accessToken: jwt.sign({id}, config.ACCESS_TOKEN_KEY, {expiresIn: "15m"}),
        refreshToken: jwt.sign({id}, config.REFRESH_TOKEN_KEY, {expiresIn: "7d"})
    }
}

export const verifyAccessToken = (token) => {
    return jwt.verify(token, config.ACCESS_TOKEN_KEY)
}

export const verifyRefreshToken = (token) => {
    return jwt.verify(token, config.REFRESH_TOKEN_KEY)
}