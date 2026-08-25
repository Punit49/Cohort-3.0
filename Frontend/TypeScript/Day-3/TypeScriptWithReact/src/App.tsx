import axios from 'axios'
import { useEffect, useState } from 'react'
import type { Product } from './types';
import ProductCard from './components/ProductCard';


const App = () => {
  const [products, setProducts] = useState<Product[]>([]);

  console.log(products);

  const getData = async () => {
    // Axios's default response data is any 
    const res = await axios.get<Product[]>("https://fakestoreapi.com/products");
    console.log(res.data);
    setProducts(res.data);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className='grid grid-cols-4 gap-2'>
      {
        products.map((val) => (
          <ProductCard key={val.id} product={val} />
        ))
      }
    </div>
  )
}

export default App;