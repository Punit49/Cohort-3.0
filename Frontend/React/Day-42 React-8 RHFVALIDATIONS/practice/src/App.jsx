import React, { useState } from 'react'
import Navbar from './Components/Navbar';
import UserCard from './Components/UserCard';
import Form from './Components/Form';

const App = () => {

  const [isFormVisible, setIsFormVisible] = useState(false);
  let storedUsers = JSON.parse(localStorage.getItem("users")) || [];
  const [users, setUsers] = useState(storedUsers);

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar setIsFormVisible={setIsFormVisible} />
      
      <div className='p-6'>
        { isFormVisible ? (
            <div className='h-[80vh] flex w-full items-center justify-center'>
              <Form setIsFormVisible={setIsFormVisible} users={users} setUsers={setUsers} />
            </div>
          ) : (
            <div className='flex flex-wrap gap-3'>
              {
                users.map((user) => {
                  return <UserCard user={user} />
                })
              }
            </div>
          )
        }
      </div>
      
    </div>
  )
}

export default App;
