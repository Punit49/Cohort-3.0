const express = require("express");
const {
  createNoteController,
  getNotesController,
  getOneNoteController,
  updateNoteController,
  deleteNoteController,
} = require("../controllers/notes.controller");
const router = express.Router();

router.get("/", getNotesController);
router.get("/:id", getOneNoteController);
router.post("/", createNoteController);
router.put("/:id", updateNoteController);
router.delete("/:id", deleteNoteController);

module.exports = router;
