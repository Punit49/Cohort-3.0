import API from "../api/axios";

const Note = ({ note, setNotes, handleEdit }) => {
  const handleNoteDelete = async (id) => {
    try {
      const deletedNote = await API.delete(`/${id}`);
      setNotes((prev) => 
        prev.filter((note) => note._id !== deletedNote.data.data._id)
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md">
      <p className="mb-4 text-xs font-medium text-gray-400">{note.createdAt}</p>

      <h2 className="text-lg font-semibold text-gray-900">{note.title}</h2>

      <p className="mt-3 text-sm leading-6 text-gray-600">{note.description.length > 25 ? note.description.substring(0, 25) : note.description }</p>

      <div className="flex gap-2">
        <button
          onClick={() => handleNoteDelete(note._id)}
          className="bg-red-500 text-white px-4 py-2 mt-4 rounded-xl"
        >
          Delete
        </button>

        <button onClick={() => handleEdit(note)} className="bg-orange-500 text-white px-4 py-2 mt-4 rounded-xl">
          Edit
        </button>
      </div>
    </div>
  );
};

export default Note;
