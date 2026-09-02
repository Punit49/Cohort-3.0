const { default: mongoose } = require("mongoose");

const notesSchema = new mongoose.Schema({
    title: {
        type: String, 
        minlength: 5
    },
    description: {
        type: String, 
        minlength: 10,
        maxlength: 100
    }
})

const NotesModel = mongoose.model("NoteApp", notesSchema);
module.exports = NotesModel;