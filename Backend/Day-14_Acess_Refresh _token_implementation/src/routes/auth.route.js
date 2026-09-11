import express from "express"
import { getMeController, refreshTokenController, registerController } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/register", registerController);
router.get("/me", getMeController);
router.post("/refresh", refreshTokenController);

export default router