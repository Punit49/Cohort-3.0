import express from "express"
import { registerController, authMeController, loginController } from "../controllers/auth.controller.js";
import authHandler from "../middlewares/auth.middleware.js";
const router = express.Router();

router.get("/me", authHandler, authMeController);
router.post('/register', registerController);
router.post('/login', loginController);

export default router;