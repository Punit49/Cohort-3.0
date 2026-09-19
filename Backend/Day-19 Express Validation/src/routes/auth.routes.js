import express from "express";
import { registerHandler } from "../controllers/auth.controller.js";
import registerValidation from "../validation/auth.validation.js";
const router = express.Router();

router.post("/register", registerValidation, registerHandler)

// ? Can be passed directly in router handler too -
// [
//     body("email")
//         .trim().exists().notEmpty().withMessage("Email is required")
//         .isEmail().withMessage("Invalid Email Address"),
//     body("phone")
//         .trim().exists().notEmpty().withMessage("Phone Number is required")
//         .isMobilePhone("en-IN").withMessage("Invalid Phone Number"),
//     body("password")
//         .trim().exists().notEmpty().withMessage("Password is required")
//         .isLength({min: 6}).withMessage("Password should be at least of 6 characters"),
//     (req, res, next) => {
//         const errors = validationResult(req);
//         if(!errors.isEmpty()){
//             return res.status(422).json({
//                 success: false, 
//                 message: "Validation Failed", 
//                 errors: errors.array()
//             })
//         }
//         next();
//     }

// ]

export default router;