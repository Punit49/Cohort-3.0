import React from 'react'
import LoginBanner from '../../features/auth/ui/components/AuthBanner'
import { Outlet } from 'react-router'

const AuthLayout = () => {
  return (
    <div>
      <LoginBanner />
      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default AuthLayout
