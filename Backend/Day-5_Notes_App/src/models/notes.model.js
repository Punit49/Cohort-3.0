const { default: mongoose } = require("mongoose");

const noteSchema = new mongoose.Schema({
    title: {
        type: String,
        minlength: 3
    },
    description: {
        type: String,
        minlength: [10, "Minimum 10 characters are required for description"],
        maxlength: [100, "Maximum 10 characters are allowed for description"]
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

const NotesModel = mongoose.model("Notes", noteSchema);
module.exports = NotesModel;