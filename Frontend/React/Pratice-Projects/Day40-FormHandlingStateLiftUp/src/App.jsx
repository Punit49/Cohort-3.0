import React from 'react'
import { useState } from 'react'
import Register from './Components/Register';
import Card from './Components/Card';

const App = () => {
  const [users, setUsers] = useState([]);
  const [isRegistered, setIsRegistered] = useState(false);

  console.log("Users", users);

  return (
    <div className='h-screen flex justify-center items-center'>
      {
        isRegistered ? 
          users.map((elem, idx) => {
            return <div key={idx} className='flex gap-3'>
              <Card users={elem} />
            </div>
          })  :
        <Register setUsers={setUsers} setIsRegistered={setIsRegistered} />
      }
    </div>
  )
}

export default App
