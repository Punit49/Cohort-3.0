import React, { useState } from 'react'
import User from "./User";
import Form from "./Form";

const Main = ({isFormVisible, setIsFormVisible}) => {
  
  const [Users, setUsers] = useState([]);

  return (
    <div className='flex h-screen p-3 gap-7'>
      {isFormVisible ? (
        <Form setUsers={setUsers} setIsFormVisible={setIsFormVisible} />
      ) : (
        Users.map((user) => {
          return <User user={user} setIsFormVisible={setIsFormVisible}/>  
        })
      )}
    </div>
  )
}

export default Main
