import React from 'react'
import Sidebar from './Sidebar'

const Page = ({user}) => {
  return (
    <div>
        <Sidebar user={user} />
    </div>
  )
}

export default Page
