import UserModel from "../model/user.model.js";
import jwt from "jsonwebtoken"
import dotenv from "dotenv"
dotenv.config();
const SECRET_KEY = process.env.JWT_SECRET_KEY;

export const tokenHandler = async (req, res, next) => {
    try {
        const token = req.headers.authorization;
        if (!token) {
            return res.status(401).json({
                error: `Token is Required`
            })
        }
        // const data = jwt.decode(token);  // it can decode but can't verify so we use .verify -
        const data = jwt.verify(token, SECRET_KEY); // now it will give invalid signature error if token is wrong
        console.log(data);
        const user = await UserModel.findById(data.id);
        console.log(user);
        req.user = user;
        next();
    } catch (error) {
        console.error("Error in Token handler Middleware - ", error.message);
        return res.status(500).json({
            error: `Error in Token handler Middleware - , ${error.message}`
        })
    }
}