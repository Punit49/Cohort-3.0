import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard';

const Products = () => {

  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  async function getProducts(){
    try {
      const res = await axios.get("https://fakestoreapi.com/products");
      setProducts(res.data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error in products api - ", error);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  if(isLoading){
    return <h1>Loading Products...</h1>
  }

  return (
    <div className='grid grid-cols-4 gap-3 p-3'>
      {
        products.map((p) => {
          return <ProductCard key={p.id} product={p} />
        })
      }
    </div>
  )
}

export default Products
