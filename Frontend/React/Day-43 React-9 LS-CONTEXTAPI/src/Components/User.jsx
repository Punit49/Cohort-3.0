import React from 'react'

const User = () => {
    return (
        <div className='border w-60 rounded-lg overflow-hidden h-100 flex flex-col justify-between '>
        <img className='object-fill object-center w-full h-[65%]' alt="User" />
        <div className='text-white h-[35%] flex flex-col gap-2 p-4 bg-blue-950 justify-between text-sm'>
            <p></p>
            <p></p>
            <p></p>
            <div className='flex justify-between'>
            <button className='bg-yellow-600 p-1 px-5 rounded'>Update</button>
            <button className='bg-red-500 p-1 px-5 rounded'>Delete</button>  
            </div >
        </div>
        </div>
    )
} 

export default User
