import express from "express"
import authRouter from "../routes/auth.route.js"
const app = express();
import cookieParser from "cookie-parser"

app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
    return res.status(200).json({
        message: "API Working"
    })
})

app.use("/api/auth", authRouter);

export default app;
