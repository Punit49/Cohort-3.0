import express from "express";
import dotenv from "dotenv";
import authRouter from "./routes/auth.router.js"

const app = express();
dotenv.config();
app.use(express.json());

app.get("/", (req, res) => {
    res.send("API working");    
})

app.use("/api/auth", authRouter)


export default app;
