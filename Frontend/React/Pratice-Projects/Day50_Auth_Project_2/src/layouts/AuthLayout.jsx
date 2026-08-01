import React from 'react'
import LoginBanner from '../components/LoginBanner'
import { Outlet } from 'react-router'

const AuthLayout = () => {
  return (
    <div className='flex w-[100%] justify-between bg-black p-10 items-start'>
        <LoginBanner />
        <Outlet className="w-[50%]" />
    </div>
  )
}

export default AuthLayout
