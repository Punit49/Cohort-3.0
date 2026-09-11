import UserModel from "../models/user.model.js";
import { verifyAccessToken, generateTokens, verifyRefreshToken } from "../utils/auth.js";
import bcrypt from "bcrypt"

const registerController = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const isUserExists = await UserModel.findOne({email});

        if(isUserExists){
            return res.status(409).json({
                message: `A user already exists with this email please login`,
                success: false, 
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

        return res.status(200).json({
            message: "User registered successfully",
            data: {
                user: {name, email}
            }, 
            accessToken
        });

    } catch (error) {
        return res.status(500).json({
            success: false, 
            message: `Error in Register API - ${error.message}`
        })
    }
}

const getMeController = async (req, res) => {
    try {
        const token = req.headers.authorization?.split(" ")[1];
        const isValidToken = verifyAccessToken(token);
        console.log(token);
        const user = await UserModel.findById(isValidToken.id);

        return res.status(200).json({
            message: "User Fetched Successfully",
            data: {
                user: {
                    email: user.email, 
                    name: user.name
                }
            }
        })

    } catch (error) {
        return res.status(401).json({
            message: "Unauthorized, invalid or expired token",
        })
    }
}

const refreshTokenController = async (req, res) => {
    try {
        const refreshToken = req.cookies.refreshToken;

        if(!refreshToken){
            return res.status(401).json({
                message: "Unauthorized, refresh token not found",
            })
        }

        const decodedToken = verifyRefreshToken(refreshToken);
        const user = await UserModel.findById(decodedToken.id);

        if(refreshToken !== user.refreshToken){
            user.refreshToken = null;
            await user.save();

            return res.status(401).json({
                message: "Unauthorized, invalid or expired token",
            })
        }

        const {accessToken, refreshToken: newRefreshToken } = generateTokens(user.id);

        res.cookie("refreshToken", newRefreshToken, { httpOnly: true });

        user.refreshToken = newRefreshToken;
        await user.save();

        res.status(200).json({
            message: "Tokens Refreshed Succesfully",
            accessToken
        });

    } catch (error) {
        return res.status(401).json({
            message: "Unauthorized, invalid or expired token",
        })
    }
}

export {
    registerController, 
    getMeController, 
    refreshTokenController
}