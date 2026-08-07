import React from 'react'
import LoginBanner from '../components/LoginBanner'
import { Outlet } from 'react-router'

const AuthLayout = () => {
  return (
    <div className='flex h-screen w-screen justify-between items-center'>
      <LoginBanner />
      <div className='pt-10 flex w-[50%] justify-center '>
        <Outlet />
      </div>
    </div>
  )
}

export default AuthLayout
