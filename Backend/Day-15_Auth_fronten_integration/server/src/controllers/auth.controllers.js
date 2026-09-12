import bcrypt from "bcrypt"
import { generateTokens } from "../utils/auth.utils.js";
import UserModel from "../models/user.model.js";

const registerController = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if(!name || !email || !password){
            return res.status(400).json({
                message: `Incomplete Data`,
            })
        }

        const passwordHash = await bcrypt.hash(password, 10);
        const user = await UserModel.create({name, email, passwordHash});
        const { accessToken, refreshToken } = generateTokens(user.id);

        user.refreshToken = refreshToken;
        await user.save();

        return res.status(201).json({
            message: "User registered successfully",
            data: {
                user: {name, email}
            },
            accessToken
        });

    } catch (error) {
        return res.status(500).json({
            message: `Error in Register API - ${error.message}`,
        })
    }
}

export {
    registerController
}