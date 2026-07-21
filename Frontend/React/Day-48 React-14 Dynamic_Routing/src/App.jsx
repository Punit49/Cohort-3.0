import React from 'react'
import Navbar from './components/Navbar'
import NavRoutes from './routes/NavRoutes'

const App = () => {
  return (
    <div className='min-h-screen'>
      <Navbar />  
      <NavRoutes />
    </div>
  )
}

export default App;
