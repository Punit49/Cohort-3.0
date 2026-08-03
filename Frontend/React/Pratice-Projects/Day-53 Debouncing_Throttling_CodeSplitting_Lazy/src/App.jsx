import React, { useEffect, useRef, useState } from 'react'
import axios from "axios"

const App = () => {

    const [searchData, setSearchData] = useState(null);
    const [products, setProducts] = useState([]);
    const [scrollVal, setScrollVal] = useState(null);
    let throttle = useRef(false);
    console.log("scrollVal - ", scrollVal);

    const getProducts = async () => {
        const res = await axios.get("https://fakestoreapi.com/products");
        setProducts(res.data);
    }

    const filterProducts = () => {
      console.log("Filtering...");
      let updatedProducts = products.filter((p) => {
        return p.title.toLowerCase().includes(searchData.toLowerCase());
      });
      setProducts(updatedProducts);
    }

    // Debouncing-
    useEffect(() => {
      if(!searchData) return;

      const timeOut = setTimeout(() => {
        filterProducts();
      }, 1000);

      return () => clearTimeout(timeOut);
    }, [searchData]);

    // Throttle -
    useEffect(() => {
      const handleScroll = () => {
        if(throttle.current) return;
        throttle.current = true;
        setScrollVal(window.scrollY);

        setTimeout(() => {
          throttle.current = false;
        }, 5000)
      }

      window.addEventListener("scroll", handleScroll);

      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
      getProducts();
    }, []);
    
    return (
      <div className='p-3 flex flex-col gap-4'>
        <h1 className='text-xl' >Fashion Store</h1>

        <input className='p-1 border-2 border-red-500' type="text" placeholder='Search Store' onChange={(e) => setSearchData(e.target.value)} />

        {
          products.map((p) => {
            return <h1 key={p.id} className='p-2 bg-blue-600 rounded-lg'>{p.title}</h1>
          })
        }

      </div>
    )
}

export default App
