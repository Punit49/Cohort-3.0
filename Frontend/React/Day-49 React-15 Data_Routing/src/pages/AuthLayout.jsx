import React from 'react'
import Sidebar from '../components/Sidebar'
import { Outlet } from 'react-router'

const AuthLayout = () => {
  return (
    <div style={{display: "flex", gap: "120px" }}>
      <Sidebar />
      <Outlet />
    </div>
  )
}

export default AuthLayout
