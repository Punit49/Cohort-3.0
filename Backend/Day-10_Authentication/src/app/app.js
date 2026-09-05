import express from "express"
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
const app = express();
dotenv.config();

app.use(express.json());

app.get('/api', (req, res) => {
    res.send('API is Working');
});

app.post('/api/register', (req, res) => {
    const { email, name } = req.body;
    const KEY = process.env.JWT_SECRET_KEY;
    console.log(KEY)
    const token = jwt.sign({
        email, name
    }, "C1k(EJ6DtA!*=TU/17>Lp/VlP>{|!BXH<ghXG-(6=Y1,OC<rAsu2ysZ/XK=d#e6$fgh.09@(s*}GL5hV,*>::%)"
    )

    return res.status(201).json({
        message: "DONE",
        data: {
            user: {
                email, name
            }, 
            token
        }
    })
})

export default app;