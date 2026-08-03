import React, { useEffect, useState } from 'react'
import axios from "axios"

const App = () => {

  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState(null);
  const [scrollVal, setScrollVal] = useState(null);
  let throttle = false;

  const getProductsTitles = async () => {
    try {
      const res = await axios.get("https://fakestoreapi.com/products");
      setProducts(res.data);
    } catch (error) {
      console.error("Error in API - ", error);
    }
  }

  const filterSearchResults = () => {
    console.log("Filtering data..")
    const filteredData = products.filter((val) => {
      return val.title.toLowerCase().includes(searchQuery.toLowerCase());
    });
    setProducts(filteredData);
  }

  // * Debouncing -
  useEffect(() => {
    if(!searchQuery) return;

    const timeout = setTimeout(() => {
      filterSearchResults();
    }, 700);

    return () => clearTimeout(timeout);
  }, [searchQuery]);

  console.log(scrollVal);

  // * Throttling - 
  useEffect(() => {

    let handleScroll = () => {
      if(throttle) return;
      throttle = true;
      console.log("Scroll Triggering...");
      setScrollVal(window.scrollY);

      // setTimeout(() => {
      //   throttle = false;
      // }, 5000);
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll); 

  }, []);

  useEffect(() => {
    getProductsTitles();
  }, []);

  return (
    <div className='flex flex-col gap-5 p-4'>
      <h1>Fashion Store</h1>

      <input type="text" placeholder='Search Products' className='border-2 border-red-700 p-2' onChange={(e) => setSearchQuery(e.target.value)} />

      <div className='flex flex-col gap-3'>
        {
          products.map((val) => {
            return <h4 className='rounded-lg p-2 bg-red-300' key={val.id}>{val.title}</h4>
          })
        }
      </div>
    </div>
  )
}

export default App;
