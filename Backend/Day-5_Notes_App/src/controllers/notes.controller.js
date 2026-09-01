const NotesModel = require("../models/notes.model");

const createNoteController = async (req, res) => {
    try {
        const { title, description } = req.body;

        const notesData = await NotesModel.create({
            title, description
        });

        return res.status(201).json({
            message: "Notes Saved Successfully",
            data: notesData
        })
    } catch (error) {
        console.error("Error in creating note - ", error);
        return res.status(500).json({
            message: `Internal server error - ${error}`
        })
    }
}

const getNotesController = async (req, res) => {
    try {
        const allNotes = await NotesModel.find();
        return res.status(200).json({
            message: "Notes Fetched Successfully",
            data: allNotes
        })
    } catch (error) {
        console.error("Error in getting all notes - ", error);
        return res.status(500).json({
            message: `Internal server error - ${error}`
        })
    }
}

const getOneNoteController = async (req, res) => {
    try {
        const id = req.params.id;
        const note = await NotesModel.findById(id);
        return res.status(200).json({
            message: "Note Fetched",
            data: note
        })
    } catch (error) {
        console.error("Error in getting one note api - ", error);
        return res.status(500).json({
            message: `Internal server error - ${error}`
        })
    }
}

const updateNoteController = async (req, res) => {
    try {
        const id = req.params.id;
        const body = req.body;
        const data = await NotesModel.findByIdAndUpdate(id, body, {new: true}); 
        return res.status(200).json({
            message: "Note Updated",
            data: data
        })
    } catch (error) {
        console.error("Error in updating note - ", error);
        return res.status(500).json({
            message: `Internal server error - ${error}`,
        })
    }
}

const deleteNoteController = async (req, res) => {
    try {
        const id = req.params.id;
        const deletedData = await NotesModel.findByIdAndDelete(id);
        return res.status(200).json({
            message: "Note Deleted",
            data: deletedData
        })
    } catch (error) {
        console.error("Error in deleting note - ", error);
        return res.status(500).json({
            message: `Internal server error - ${error}`,
        })
    }
}

module.exports = { createNoteController, getNotesController, getOneNoteController, updateNoteController, deleteNoteController };

