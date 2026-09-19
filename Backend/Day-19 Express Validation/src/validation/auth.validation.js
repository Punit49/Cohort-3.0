import { body, validationResult } from "express-validator";

const errors = [
    body("email")
        .trim().exists().notEmpty().withMessage("Email is required")
        .isEmail().withMessage("Invalid Email Address"),
    body("phone")
        .trim().exists().notEmpty().withMessage("Phone number is required")
        .isMobilePhone("en-IN").withMessage("Phone number is invalid"),
    body("password")
        .trim().exists().notEmpty().withMessage("Password is required")
        .isLength({min: 6}).withMessage("Password must be at least of 6 characters"),
    (req, res, next) => {
        const err = validationResult(req);
        if(!err.isEmpty()){
            return res.status(422).json({
                success: false,
                message: "Validation Failed",
                errors: err.array()
            })
        }
        next();
    }
]

export default errors;