import React, { useState } from 'react';
import { BrowserRouter, Route, Routes, useNavigate } from "react-router";
import Navbar from './components/Navbar';
import Home from "./components/Home"
import Contact from './components/Contact';
import About from './components/About';
import Navigation from './components/Navigation';
import Profile from './components/Profile';
import NestedAbout from './components/NestedAbout';


const App = () => {

  const [page, setPage] = useState("home");
  const navigate = useNavigate();

  return (
    <div>
      <Navbar setPage={setPage} />

      <div className='p-5 flex flex-col gap-5'> 
          {/*  Not optimized approach
            {page === "home" && <Home />}
            {page === "about" && <About />}
            {page === "contact" && <Contact />} 
          */}

          {/* Better Approach */}
          <Routes>
            <Route path='/' element={<Home />} >
                <Route path='/profile' element={<Profile />} />
            </Route>
            <Route path='/about' element={<About />} >
              <Route path='/about/nested' element={ <NestedAbout /> } />
            </Route>
            <Route path='/contact' element={<Contact />} />
            <Route path='/navigation' element={<Navigation />} />
          </Routes>

          <button onClick={() => navigate("/navigation",{ state: {
            name: "Punit", age: 21
          }})}>Go to navigation</button>
      </div>
    </div>
  )
}

export default App
