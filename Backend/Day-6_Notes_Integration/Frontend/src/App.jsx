import React, { useState } from 'react'
import Home from './components/Home'
import NoteForm from './components/NoteForm'

const App = () => {

  const [isFormVisible, setIsFormVisible] = useState(false);
  const [selectedNote, setSelectedNote] = useState(null);

  return (
    <div>
      {
        isFormVisible ? 
              <NoteForm setSelectedNote={setSelectedNote} selectedNote={selectedNote} setIsFormVisible={setIsFormVisible} /> : 
              <Home setSelectedNote={setSelectedNote} setIsFormVisible={setIsFormVisible} />
      }      
    </div>
  )
}

export default App
