import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Note from "../components/Note";
import API from "../api/axios"

const Home = ({setIsFormVisible, setSelectedNote}) => {
  const [notes, setNotes] = useState([]);

  const getNotes = async () => {
    try {
        const allNotes = await API.get("/");     
        setNotes(allNotes.data.data); 
    } catch (error) {
      console.error(error);
    }
  }

  // edit function -
  const handleEdit = (note) => {
    setSelectedNote(note);
    setIsFormVisible(true);
  }
  
  useEffect(() => {
    getNotes();
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a21] text-white">
      
      <Navbar setIsFormVisible={setIsFormVisible} /> 

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        
        <div className="mb-8">
          <h1 className="text-2xl font-bold  sm:text-3xl">
            My Notes
          </h1>

          <p className="mt-2 text-sm">
            All your notes in one place.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          
          {
            notes && notes.map((note) => (
              <Note key={note._id} note={note} setNotes={setNotes} handleEdit={handleEdit}/>
            ))
          }
        </div>
      </main>
    </div>
  );
};

export default Home;