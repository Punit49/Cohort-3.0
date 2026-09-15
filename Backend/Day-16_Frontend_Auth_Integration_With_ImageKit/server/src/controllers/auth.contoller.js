import UserModel from "../models/user.model.js";
import bcrypt from "bcrypt"
import { generateTokens, verifyAccessToken, verifyRefreshToken } from "../utils/auth.token.js";

const registerController = async (req, res) => {
    try {
        const { name, email, password, profilePic } = req.body;
        const file = req.file;

        if (!name || !email || !password) {
            return res.status(400).json({
                message: "Incomplete Data",
            })
        }

        const isUserExists = await UserModel.findOne({ email });
        if (isUserExists) {
            return res.status(409).json({
                message: "User with this email already exists, Please Login",
            })
        }

        const passwordHash = await bcrypt.hash(password, 10);
        const user = await UserModel.create({ name, email, passwordHash });
        const { accessToken, refreshToken } = generateTokens(user._id);

        user.refreshToken = refreshToken;
        await user.save();
        res.cookie("refreshToken", refreshToken, {
            httpOnly: true
        })

        res.status(200).json({
            message: "User Registered Successfully",
            data: {
                user: {
                    name, email, profilePic: user.profilePic
                },
                accessToken
            }
        });
    } catch (error) {
        console.log(error);
    }
}

const authMeController = async (req, res) => {
    const { name, email, profilePic } = req.user;
    return res.status(200).json({
        user: {
            name, email, profilePic
        }
    })
}

const refreshTokenController = async (req, res) => {
    console.log(19019)
    try {
        console.log(req.cookies);
        const refreshToken = req.cookies.refreshToken;
        
        if(!refreshToken){
            return res.status(401).json({
                message: "Unauthorized, refresh token not found"
            })
        }

        const decoded = verifyRefreshToken(refreshToken);

        if(!decoded){
            return res.status(401).json({
                message: "Invalid or Expired Token"
            })
        }

        const user = await UserModel.findById(decoded.id);

        if(!user){
            return res.status(401).json({
                message: "user not found"
            })
        }

        if(user.refreshToken != refreshToken){
            user.refreshToken = null;
            await user.save();
            return res.status(401).json({
                message: "Invalid Refresh Token"
            })
        }

        const {accessToken, refreshToken: newRefreshToken} = generateTokens(user.id);
        
        res.cookie("refreshToken", newRefreshToken, { httpOnly: true });
        user.refreshToken = newRefreshToken;
        await user.save();

        return res.status(200).json({
            message: "Token Refreshed",
            accessToken
        })

    } catch (error) {
        return res.status(500).json({
            message: `Internal Server Error - ${error.message}`
        })
    }
}

export {
    registerController, authMeController, refreshTokenController
}