import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.config.js";
import postRouter from "./routes/post.routes.js";

const app = express();
dotenv.config();

connectDB();

app.get("/", (req, res) => {
    res.send("Done");
})

app.use('/post', postRouter)

export default app;
