import React from 'react'
import Profile from './Profile'

const Sidebar = ({user}) => {
  return (
    <div>
        <Profile user={user} />
    </div>
  )
}

export default Sidebar
