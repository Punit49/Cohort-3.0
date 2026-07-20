import React from 'react'
import Navbar from './Components/Navbar'
import ProductCard from './Components/ProductCard'
import Cart from './Components/Cart'
import { useContext } from 'react'
import { MyStore } from './Context/ProductContext'
import { useEffect } from 'react'
import axios from "axios";
import { useState } from 'react'

const App = () => {
  const {isCartOpen} = useContext(MyStore);
  const {cartItems} = useContext(MyStore);
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
        const res = await axios.get("https://fakestoreapi.com/products");
        setProducts(res.data);
        console.log(res.data);
    } catch (error) {
      alert("Error - ", error);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
        <Navbar />
        {
          isCartOpen ? (
            <div className='h-screen p-6'>
              <Cart />
            </div>
          ) : (
            <div className='h-screen p-6 flex gap-5 flex-wrap'>
              {
                products.map((p) => {
                  const isInCart = cartItems.find((i) => i.id === p.id);
                  return <ProductCard product={p} key={p.id} isInCart={isInCart} />
                })
              }
            </div>
          )
        }
    </div>
  )
}

export default App
