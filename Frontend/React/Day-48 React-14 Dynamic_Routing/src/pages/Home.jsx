import React, { useContext, useEffect } from 'react'
import { MyStore } from '../context/AppContext'
import axios from "axios";
import Products from './Products';

const Home = () => {

  const {products, setProducts} = useContext(MyStore);
  console.log(products);    
     
  const getProducts = async () => {
    try{
      const res = await axios.get("https://fakestoreapi.com/products");
      setProducts(res.data);
    } catch(e){
      console.error(e);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className='h-[100%] p-6 flex flex-wrap gap-3'>
      {
        products.map((product) => {
          return <Products key={product.id} product={product} />
        })
      }
    </div> 
  )
}

export default Home;
