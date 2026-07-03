import React from 'react'

const CompanyCard = ({product, del}) => {
  return (
    <section className='w-50 gap-2 justify-between border-red-900 p-2 text-white bg-indigo-950 rounded flex flex-col'>
        <img className='bg-black h-45 rounded-2xl w-100 p-4' src={product.image} alt="" />
        <p>{product.title}</p>
        <p className='text-green-400'>{product.price}</p>
        <p className='bg-gray-400 w-fit px-3 text-black rounded-2xl'>{product.category}</p>
        <button onClick={() => {
            del(product.id)
        }} className='bg-red-700 p-2 rounded'>Delete</button>
    </section>
  )
}

export default CompanyCard;
