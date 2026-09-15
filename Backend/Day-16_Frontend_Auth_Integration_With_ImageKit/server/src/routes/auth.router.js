import express from "express"
import { authMeController, refreshTokenController, registerController } from "../controllers/auth.contoller.js";
import upload from "../config/multer.config.js";
import authVerification from "../middlewares/auth.middleware.js";
const router = express.Router();

router.post("/register", upload.single("profilePic"), registerController);
router.get("/me", authVerification, authMeController);
router.post("/refresh", refreshTokenController);

export default router;
