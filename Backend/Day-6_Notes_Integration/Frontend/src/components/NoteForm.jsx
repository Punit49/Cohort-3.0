import { useEffect } from "react";
import { useForm } from "react-hook-form";
import API from "../api/axios";

const NoteForm = ({ setIsFormVisible, selectedNote, setSelectedNote }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onChange",
  });

  const handleNoteCreation = async (data) => {
    try {
      if (selectedNote) {
        const note = await API.put(
            `/${selectedNote._id}`,
            data,
        );
        console.log(note);
      } else {
        const note = await API.post("/", data);
        console.log(note);
      }
      setSelectedNote(null); 
      setIsFormVisible(false);
      reset();  
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
      if (selectedNote) {
          reset({
              title: selectedNote.title,
              description: selectedNote.description,
          });
      } else {
          reset({
              title: "",
              description: "",
          });
      }
  }, [selectedNote, reset]);

  return (
    <div className="min-h-screen bg-black text-white px-4 py-8">
      <div className="mx-auto max-w-xl">
        <div className="mb-6">
          <h1 className="text-2xl font-bold ">
            {selectedNote ? "Edit your note" : "Create a Note"}
          </h1>

          <p className="mt-1 text-sm text-gray-500">
            Write down your thoughts and ideas.
          </p>
        </div>

        <form
          onSubmit={handleSubmit(handleNoteCreation)}
          className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
        >
          <div className="mb-5">
            <label
              htmlFor="title"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Title
            </label>

            <input
              {...register("title", {
                required: "Title is required",
                minLength: {
                  value: 5,
                  message: "Minimum 5 characters are required",
                },
                type: String,
              })}
              type="text"
              id="title"
              placeholder="Enter note title"
              className="w-full rounded-lg border text-black border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-black"
            />

            {errors.title && (
              <p className="p-1 text-red-500">{errors.title.message}</p>
            )}
          </div>

          <div className="mb-6">
            <label
              htmlFor="description"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Description
            </label>

            <textarea
              {...register("description", {
                required: "description is required",
                minLength: {
                  value: 10,
                  message: "Minimum 5 characters are required",
                },
                maxLength: {
                  value: 100,
                  message: "Max 50 characters are allowed",
                },
                type: String,
              })}
              id="description"
              rows="6"
              placeholder="Write your note here..."
              className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-black text-black"
            />
            {errors.description && (
              <p className="p-1 text-red-500">{errors.description.message}</p>
            )}
          </div>

          <div className="flex items-center justify-end gap-3">
            <button
                onClick={() => {
                    setSelectedNote(null); 
                    setIsFormVisible(false)
                }}
              type="button"
              className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="rounded-lg bg-black px-5 py-2 text-sm font-medium text-white transition hover:bg-gray-800"
            >
                {selectedNote ? "Edit Note" : "Add Note"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NoteForm;
