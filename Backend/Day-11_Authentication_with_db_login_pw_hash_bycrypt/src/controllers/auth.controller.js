import UserModel from "../model/user.model.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt"
import dotenv from "dotenv";
dotenv.config();
const SECRET_KEY = process.env.JWT_SECRET_KEY;

const registerController = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            return res.status(400).json({
                message: "Incomplete data received",
                success: false
            })
        }

        // Password hashing using bcrypt
        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await UserModel.create({
            name, email, password: hashedPassword
        });

        const token = jwt.sign({
            id: user._id,
        }, SECRET_KEY);

        return res.status(200).json({
            success: true,
            message: "User Registered Successfully",
            data: {
                user: {
                    name, email, id: user._id
                },
                token
            }
        })
    } catch (error) {
        console.error("Error in Register API - ", error.message);
    }
}

const authMeController = async (req, res) => {
    try {
        console.log(req.user, "From controller of auth");
        return res.status(200).json({
            success: true,
            user: req.user, 
        })
    } catch (error) {
        console.error("Error in Auth.me API - ", error.message);
        return res.status(500).json({
            error: `Error in Auth.me API - , ${error.message}`
        })
    }
}

const loginController = async (req, res) => {
    try {
        const { email, password } = req.body;

        if(!email || !password){
            return res.status(400).json({message: "Email or Password is required"});
        }

        const user = await UserModel.findOne({email}).select("+password");
        
        if(!user){
            return res.status(401).json({message: "Invalid Email or Password"});
        }

        const isValidUser = await bcrypt.compare(password, user.password);

        if(!isValidUser){
            return res.status(401).json({message: "Invalid Email or Password"});
        }

        const token = jwt.sign({
            id: user._id
        }, SECRET_KEY);

        return res.status(200).json({
            message: "Logged in successfully",
            data: {
                user: {
                    email, name: user.name
                },
                token
            }
        })
    } catch (error) {
        console.error("Error in Login API - ", error.message);
        return res.status(500).json({
            error: `Error in Login API - , ${error.message}`
        })
    }
}

export {
    registerController, authMeController, loginController
}