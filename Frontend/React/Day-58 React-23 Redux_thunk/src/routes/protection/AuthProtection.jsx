import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router'

const AuthProtection = () => {
  const { user, isLoading } = useSelector((store) => store.auth);

  if(isLoading) {
    console.log("auth")
    return <h1>Loading Layout...</h1>
  }

  if(user){
    return <Navigate to={"/"} />
  }

  return <Outlet />
}

export default AuthProtection
