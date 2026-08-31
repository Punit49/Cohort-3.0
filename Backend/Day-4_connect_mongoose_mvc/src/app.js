const express = require("express");
const connectDB = require("../config/db");
const NotesModel = require("../models/notes.model");
const app = express();
app.use(express.json());

connectDB();

app.get("/", (req, res) => {
    res.send("✅ Done");
})

app.post("/create", async (req, res) => {
    const {title, description} = req.body;
    const notesData = await NotesModel.create({
        title, description
    })
    res.send({
        success: true,
        message: "Note Saved Successfully",
        data: notesData
    });
})

module.exports = app;
