const { default: mongoose } = require("mongoose");

const noteSchema = new mongoose.Schema({
    title: {
        type: String,
        minlength: 3,
        required: true
    },
    description: {
        type: String,
        minlength: 10,
        maxlength: 100,
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

const NotesModel = mongoose.model("Notes", noteSchema);
module.exports = NotesModel;