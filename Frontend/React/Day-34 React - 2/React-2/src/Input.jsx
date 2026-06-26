import React from 'react'

const Input = ({label, ...allProps}) => {
    console.log(allProps)
  return (
    <div>
        <label htmlFor="">{label}</label>
        <input {...allProps} />
    </div>
  )
}

export default Input
