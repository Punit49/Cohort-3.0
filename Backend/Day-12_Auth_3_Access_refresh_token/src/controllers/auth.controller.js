import bcrypt from "bcrypt";
import UserModel from "../models/user.model.js";
import jwt from "jsonwebtoken"
import dotenv from "dotenv"
dotenv.config()
const SECRET_KEY = process.env.JWT_SECRET_KEY;

const registerController = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if(!name || !email || !password) {
            console.log('Name, Email and Password is required');
            return res.status(400).json({
                message: `Name, Email and Password is required`
            })   
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        
        const user = await UserModel.create({
            name, email, password: hashedPassword
        }) 

        const token = jwt.sign({
            id: user._id
        }, SECRET_KEY);

        return res.status(201).json({
            message: "User Registered Succesfully",
            data: {
                user: {
                    name, email, hashedPassword
                }, 
                token
            }
        })

    } catch (error) {
        console.log(`Error in Register API - ${error.message}`);
        return res.status(500).json({
            message: `Error in Register API - ${error.message}`
        })
    }
}

const loginController = async (req, res) => {
    try {
        const {email, password} = req.body;

        if(!email || !password){
            return res.status(400).json({
                message: "Email or Password is required"
            })
        }

        const user = await UserModel.findOne({email}).select("+password");
        
        if(!user) {
            return res.status(401).json({
                message: "Invalid email or password"
            })
        }

        const isValidUser = await bcrypt.compare(password, user.password);
        
        if(!isValidUser){
            return res.status(401).json({
                message: "Invalid email or password"
            })
        }

        const token = jwt.sign({
            id: user._id
        }, SECRET_KEY);

        return res.status(200).json({
            message: "Logged in successfully",
            data: {
                user: {
                    name: user.name, email
                },
                token
            }
        })

    } catch (error) {
        console.log(`Error in Login API - ${error.message}`);
        return res.status(500).json({
            message: `Error in Login API - ${error.message}`
        })
    }
}

const authMeController = async (req, res) => {
    try {
        console.log(req.user);
        res.status(200).json({
            message: "Authenticated User",
            user: req.user
        })
    } catch (error) {
        console.log(`Error in Auth Me API - ${error.message}`);
        return res.status(500).json({
            message: `Error in Auth Me API - ${error.message}`
        })
    }
}

export { 
    registerController, 
    loginController,
    authMeController
}