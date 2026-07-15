import React from 'react'
import ProductCard from './ProductCard'
import CartCard from './CartCard'

const Cart = ({cartItems}) => {
  return (
    <div className="p-8 flex flex-col gap-10">
        <h1 className='text-3xl font-bold'>Cart Items</h1>
      {cartItems ? 
        <div className='grid grid-cols-5 gap-4'>
            {cartItems.map((p) => {
                return <CartCard key={p.id} item={p} />
            })}
        </div>
      : <h1 className='text-3xl font-bold'>Cart is Empty, Shop More</h1> }
    </div>
  )
}

export default Cart
