import React from 'react'

const Navbar = ({setIsFormVisible}) => {
  return (
    <div className='flex justify-between px-4 py-3 bg-gray-800 text-white items-center'>
      <div className="logo text-2xl">Logo</div>
      <nav className='flex gap-10'>
        <li className='list-none'>Home</li>
        <li className='list-none'>About</li>
        <li className='list-none'>Contact</li>
      </nav>
      <button className='bg-blue-600 px-3 py-1 rounded' onClick={() => setIsFormVisible(prev => !prev)}>Create User</button>
    </div>
  )
}

export default Navbar
