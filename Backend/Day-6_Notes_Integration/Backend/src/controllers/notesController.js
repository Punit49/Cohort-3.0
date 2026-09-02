const NotesModel = require("../models/note.model");

const getAllNotesController = async (req, res) => {
    try {
        const notes = await NotesModel.find();
        return res.status(200).json({
            message: "Notes Fetched Successfully",
            data: notes
        })
    } catch (error) {
        console.error("Error in getting all notes - ", error);
        return res.status(500).json({
            message: `Internal server error - ${error}`,
        })
    }
}

const getSingleNoteController = async (req, res) => {
    try {
        const id = req.params.id;
        const note = await NotesModel.findById(id);
        return res.status(200).json({
            message: "Note Fetched Successfully",
            data: note
        })
    } catch (error) {
        console.error("Error in getting note - ", error);
        return res.status(500).json({
            message: `Internal server error - ${error}`,
        })
    }
}

const createNoteController = async (req, res) => {
    try {
        const body = req.body;
        const note = await NotesModel.create(body);
        return res.status(201).json({
            message: "Note Created Successfully",
            data: note
        })
    } catch (error) {
        console.error("Error in creating note - ", error);
        return res.status(500).json({
            message: `Internal server error - ${error}`,
        })
    }
}

const putNoteController = async (req, res) => {
    try {
        const id = req.params.id;
        const body = req.body;
        const note = await NotesModel.findByIdAndUpdate(id, body, {new: true});
        return res.status(201).json({
            message: "Note Updated Successfully",
            data: note
        })
    } catch (error) {
        console.error("Error in updating note - ", error);
        return res.status(500).json({
            message: `Internal server error - ${error}`,
        })
    }
}

const patchNoteController = async (req, res) => {
    try {
        const id = req.params.id;
        const body = req.body;
        const note = await NotesModel.findByIdAndUpdate(id, body, {new: true});
        return res.status(201).json({
            message: "Note Updated Successfully",
            data: note
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
        const note = await NotesModel.findByIdAndDelete(id);
        return res.status(201).json({
            message: "Note Deleted Successfully",
            data: note
        })
    } catch (error) {
        console.error("Error in deleting note - ", error);
        return res.status(500).json({
            message: `Internal server error - ${error}`,
        })
    }
}

module.exports = {
    getSingleNoteController, 
    getAllNotesController,
    createNoteController,
    putNoteController,
    patchNoteController,
    deleteNoteController
}