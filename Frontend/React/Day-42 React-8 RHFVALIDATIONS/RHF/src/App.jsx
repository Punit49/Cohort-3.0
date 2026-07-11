import React, { useState } from 'react';
import Form from './Components/Form';
import Navbar from './Components/Navbar';
import Main from "./Components/Main";

const App = () => {

  const [isFormVisible, setIsFormVisible] = useState(false) 

  return (
    <div>
      <Navbar setIsFormVisible={setIsFormVisible} />
      <Main isFormVisible={isFormVisible} setIsFormVisible={setIsFormVisible}/>
    </div>
  )
}

export default App;

