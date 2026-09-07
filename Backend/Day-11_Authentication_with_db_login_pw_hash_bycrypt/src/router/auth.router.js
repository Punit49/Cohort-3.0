import express from "express";
import { authMeController, registerController, loginController } from "../controllers/auth.controller.js";
import { tokenHandler } from "../middleware/auth.middleware.js";
const router = express.Router();

router.post("/register", registerController)
router.post("/login", loginController)
router.get("/me", tokenHandler, authMeController)

export default router;