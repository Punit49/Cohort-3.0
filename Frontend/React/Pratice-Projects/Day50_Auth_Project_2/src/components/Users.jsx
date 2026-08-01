import axios from 'axios';
import React, { useEffect, useState } from 'react'
import UserCard from './UserCard';

const Users = () => {

  const [webUsers, setWebUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  async function getUsersData(){
    try {
      const res = await axios.get("https://fakestoreapi.com/users");
      setWebUsers(res.data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error is user api", error);
    }
  }

  useEffect(() => {
    getUsersData();
  }, []);

  if(isLoading){
    return (
      <h1 className='text-2xl font-bold'>Loading Users</h1>
    )
  }

  return (
    <div className='grid grid-cols-3 gap-3 p-3'>
      {
        webUsers.map((user) => {
          return <UserCard key={user.id} user={user} />
        })
      }
    </div>
  )
}

export default Users
