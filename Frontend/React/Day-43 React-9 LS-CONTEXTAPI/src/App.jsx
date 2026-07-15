import React, { useState } from 'react';
import Form from './Components/Form';
import Navbar from './Components/Navbar';
import Parent from "./Components/Parent";

const App = () => {

  const [ isFormVisible, setIsFormVisible ] = useState(false);

  return (
    <div>
      <Navbar setIsFormVisible={setIsFormVisible}/>
      <Parent isFormVisible={isFormVisible} setIsFormVisible={setIsFormVisible} />
    </div>
  )
}

export default App;

