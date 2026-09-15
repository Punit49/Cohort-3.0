import UserModel from "../models/user.model.js";
import { verifyAccessToken } from "../utils/auth.token.js";

const authVerification = async (req, res, next) => {
    try {
        const accessToken = req.headers.authorization.split(" ")[1];
        
        if(!accessToken){
            return res.status(401).json({
                message: "Unauthorized, Please Login"
            })
        }
        
        const decoded = verifyAccessToken(accessToken);

        if(!decoded){
            return res.status(401).json({
                message: `Invalid or Expired token`
            })
        }

        const user = await UserModel.findById(decoded.id);

        if(!user){
            return res.status(401).json({
                message: `Invalid or Expired token`
            })
        }

        req.user = user;
        
        next();
    } catch (error) {
        console.log(error.message);
        return res.status(401).json({
            message: `Invalid or Expired token`
        })
    }
}

export default authVerification;