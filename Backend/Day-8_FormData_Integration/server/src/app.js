const express = require("express");
const fileRouter  = require("./routes/file.route");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

app.get("/", (req, res) => {
    res.send("Done");
})

app.use("/file", fileRouter)

module.exports = app;

