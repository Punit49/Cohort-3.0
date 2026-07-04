import React from 'react'

const Card = ({users}) => {
  return (
    <div className='border overflow-hidden w-50 flex flex-col gap-1 rounded-xl p-3'>
        <img className='' src={users.image} alt="User" />
        <p>{users.name}</p>
        <p>{users.email}</p>
        <p>{"*".repeat(users.password.length)}</p>
        <p>{users.accountnumber}</p>
    </div>
  )
}

export default Card
