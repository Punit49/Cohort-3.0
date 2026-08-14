import React from 'react'
import AuthBanner from "../../feature/auth/ui/components/AuthBanner"
import { Outlet } from 'react-router'

const AuthLayout = () => {
  return (
    <div className='flex'>
      <AuthBanner />
      <Outlet />
    </div>
  )
}

export default AuthLayout
