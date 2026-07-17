import React, { useState } from 'react'
import Navbar from './Components/Navbar';
import UserCard from './Components/UserCard';
import Form from './Components/Form';

const App = () => {

  const [isFormVisible, setIsFormVisible] = useState(false);
  const [updateUser, setUpdateUser] = useState(null);
  const [users, setUsers] = useState(() => {
    return JSON.parse(localStorage.getItem("users")) || [];
  });

  const handleDelete = (id) => {
    let updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar setIsFormVisible={setIsFormVisible} />
      
      <div className='p-6'>
        { isFormVisible ? (
            <div className='h-[80vh] flex w-full items-center justify-center'>
              <Form setUpdateUser={setUpdateUser} updateUser={updateUser} setIsFormVisible={setIsFormVisible} users={users} setUsers={setUsers} />
            </div>
          ) : (
            <div className='flex flex-wrap gap-3'>
              {
                users.map((user) => {
                  return <UserCard setUpdatedUser={setUpdateUser} setIsFormVisible={setIsFormVisible} key={user.id} user={user} handleDelete={handleDelete} />
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
