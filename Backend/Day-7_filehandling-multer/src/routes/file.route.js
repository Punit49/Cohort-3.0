const express = require("express");
const router = express.Router();
const upload = require("../config/multer");

router.post("/", upload.single("image"), async (req, res) => {
    try {
        const body = req.body;
        console.log(body);
        console.log(req.file);
        return res.status(200).json({
            message: "Data Received"
        })
    } catch (error) {
        console.error(error);
    }
})

module.exports = router;