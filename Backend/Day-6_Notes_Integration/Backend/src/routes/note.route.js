const express = require("express");
const { getAllNotesController, createNoteController, putNoteController, patchNoteController, deleteNoteController } = require("../controllers/notesController");
const router = express.Router();

router.get("/", getAllNotesController);
router.post("/", createNoteController);
router.put("/:id", putNoteController);
router.patch("/:id", patchNoteController);
router.delete("/:id", deleteNoteController);

module.exports = router;