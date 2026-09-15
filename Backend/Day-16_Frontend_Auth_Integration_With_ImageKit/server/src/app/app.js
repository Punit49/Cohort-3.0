import express from "express"
import authRouter from "../routes/auth.router.js";
import cookieParser from "cookie-parser"
const app = express();

app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
    res.status(200).json({
        message: "API Working"
    })
});

app.use("/api/auth", authRouter)

export default app; 