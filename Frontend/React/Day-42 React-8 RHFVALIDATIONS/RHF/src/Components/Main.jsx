import React, { useState } from 'react'
import User from "./User";
import Form from "./Form";

const Main = ({isFormVisible, setIsFormVisible}) => {
  
  const var1 = JSON.parse(localStorage.getItem("users")) || [];
  const [Users, setUsers] = useState(var1);
  const [update, setUpdate] = useState({});

  const deleteUser = (id) => {
    let filteredUsers = Users.filter((user) => {
      return user.id !== id
    });
    setUsers(filteredUsers);
    localStorage.setItem("users", JSON.stringify(filteredUsers));
    console.log(filteredUsers);
  }

  const updateUser = (user) => {
    setUpdate(user);
  }

  return (
    <div className='flex h-screen p-3 gap-7 flex-wrap'>
      {isFormVisible ? (
        <Form updateUser={update} Users={Users} setUsers={setUsers} setIsFormVisible={setIsFormVisible} setUpdate={setUpdate}/>
      ) : (
        Users.map((user) => {
          return <User deleteUser={deleteUser} key={user.id} user={user} setIsFormVisible={setIsFormVisible} updateUser={updateUser}/>  
        })
      )}
    </div>
  )
}

export default Main
