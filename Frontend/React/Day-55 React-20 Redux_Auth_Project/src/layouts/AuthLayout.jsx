import React from 'react'
import LoginBanner from '../components/LoginBanner'
import { Outlet } from 'react-router'

const AuthLayout = () => {
  return (
    <div>
      <LoginBanner />
      <div className='p-1 flex w-screen items-center h-screen justify-center'>
        <Outlet />
      </div>
    </div>
  )
}

export default AuthLayout
