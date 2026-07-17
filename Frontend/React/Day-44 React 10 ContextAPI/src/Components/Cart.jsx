import React, { useContext } from 'react'
import CartCard from './CartCard'
import { MyStore } from '../context/ProductContext'

const Cart = () => {

  const {cartItems} = useContext(MyStore);

  return (
    <div className="p-3">
      {
        cartItems.length === 0 ? (
          <h1>Cart is Empty</h1>
        ) : (
          <div className='flex flex-wrap gap-4'>
            {
              cartItems.map((p) => {
                return <CartCard key={p.id} item={p} />
              })
            }
          </div>
        )
      }  
    </div>
  )
}

export default Cart
