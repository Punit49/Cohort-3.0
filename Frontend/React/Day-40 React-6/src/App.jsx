import React, { useState } from 'react'
import Login from './Components/Login'
import Register from './Components/Register'

const App = () => {
  
  const [isLogin, setIsLogin] = useState(true);
  
  return (
    <div className='flex justify-center items-center h-screen'>
      {isLogin ? 
        (<Login setIsLogin={setIsLogin} />) : 
        (<Register setIsLogin={setIsLogin} />)
      }
    </div>
  )
}

export default App;
