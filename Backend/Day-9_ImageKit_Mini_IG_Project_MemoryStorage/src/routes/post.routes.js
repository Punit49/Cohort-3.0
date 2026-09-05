import express from "express";
import { postController } from "../controllers/post.controller.js";
import upload from "../config/multer.config.js"
const router = express.Router();

router.post("/", upload.single("image"), postController);

export default router; 