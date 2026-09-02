const express = require("express");
const connectDB = require("./config/db");
const notesRouter = require("./routes/note.route");
const cors = require("cors");  
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors({
    origin: "http://localhost:5173"
}))

connectDB();

app.get("/", (req, res) => {
    res.send("Working");
});

app.use("/notes", notesRouter);

module.exports = app;