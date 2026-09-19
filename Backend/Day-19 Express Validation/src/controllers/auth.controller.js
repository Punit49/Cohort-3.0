import UserModel from "../models/user.model.js";
import bcrypt from "bcrypt";
import { generateToken } from "../utils/token.js";
import { validateRegisterData } from "../utils/validation.js";

const registerHandler = async (req, res) => {
    try {
        const { phone, email, password } = req.body;

        // ? - Manula Method - 
        // const errors = validateRegisterData(req.body);

        // if(errors.length > 0){
        //     return res.status(422).json({
        //         success: false,
        //         message: "Validation Failed", 
        //         errors
        //     })
        // }

        const isEmailExists = await UserModel.findOne({email});
        if(isEmailExists){
            return res.status(409).json({
                success: false,
                field: "email",
                message: "User with this email already exists"
            })
        }

        const isPhoneExists = await UserModel.findOne({phone});
        if(isPhoneExists){
            return res.status(409).json({
                success: false,
                field: "phone", 
                message: "User with this phone number already exists"
            })
        }

        const passwordHash = await bcrypt.hash(password, 10);
        const user = await UserModel.create({email, phone, passwordHash});
        const { accessToken, refreshToken } = generateToken(user._id);

        user.refreshToken = refreshToken;
        await user.save();

        res.cookie("refreshToken", refreshToken, {
            httpOnly: true,
            maxAge: 7 * 24 * 60 * 60 * 1000 
        });

        return res.status(201).json({
            success: true,
            data: {
                user: {
                    email, phone
                }
            }, 
            accessToken
        });
    } catch (error) {
        return res.status(500).json({
            success: false, 
            message: `Error - ${error.message}`
        })
    }
}

export {
    registerHandler
}