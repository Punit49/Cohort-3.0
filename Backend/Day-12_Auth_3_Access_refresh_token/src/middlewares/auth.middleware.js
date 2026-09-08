import jwt from "jsonwebtoken"
import dotenv from "dotenv"
import UserModel from "../models/user.model.js";
dotenv.config()

const authHandler = async (req, res, next) => {
    try {
        const token = req.headers.authorization;
        if(!token){
            return res.status(401).json({
                message: "Please Login First"
            })
        }

        const tokenDetails = jwt.verify(token, process.env.JWT_SECRET_KEY);
        const user = await UserModel.findById(tokenDetails.id);

        if(!user){
            return res.status(401).json({
                message: "The provided authorization token is invalid or has expired."
            })
        }

        req.user = user;
        next();

    } catch (error) {
        return res.status(500).json({
            message: `Error in auth middleware - ${error.message}`
        })
    }
}

export default authHandler;

