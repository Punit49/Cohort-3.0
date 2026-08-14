import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router'

const MainProtection = () => {

  const { user, isLoading } = useSelector((store) => store.auth);

  if(isLoading) return <h1>Loading Layout...</h1>
  
  if(!user) {
    console.log(user)
    return <Navigate to={'/auth/login'} />
  }

  return <Outlet />
}

export default MainProtection
