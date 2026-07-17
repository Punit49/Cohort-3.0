import React, { useContext, useState } from 'react'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import { ContextProvider, MyStore } from './context/MyContext'

const App = () => {
  console.log("app rendering...");
  
  return (
    <div>
      <Home />

      <ContextProvider>
        <About />
        <Contact />
      </ContextProvider>

    </div>
  )
}

export default App
