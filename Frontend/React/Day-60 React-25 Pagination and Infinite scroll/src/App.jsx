import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const App = () => {
  const [page, setPage] = useState(1);
  const [products, setProducts] = useState(null);
  const limit = 10;

  console.log(products);

  const getProducts = async () => {
    try {
      const res = await axios.get(`https://dummyjson.com/products?limit=${limit}&skip=${(page - 1) * limit}`);
      setProducts(res.data);
    } catch (error) {
      console.error("Error in api", error);
    }
  };

  const totalPages = Math.ceil(products?.total / limit);
  console.log(totalPages);

  useEffect(() => {
    getProducts();
  }, [page]);

  return (
    <div className="p-4 flex flex-col gap-14 pb-14">
      <div className="grid grid-cols-4 gap-4">
        { products ? products.products.map((p) => (
            <ProductCard key={p.id} product={p} />
          )) : <h1 className="h-screen">Loading...</h1>
        }
      </div>

      <div className="flex gap-2 justify-center items-center">
        <button disabled={page <= 0} onClick={() => setPage(page - 1)} className={`cursor-pointer text-2xl text-white px-4 rounded-lg py-1 ${page <= 0 ? 'bg-blue-400' : 'bg-blue-500'}`}>Prev</button>
        <span className="text-xl">
          {page} of {totalPages}
        </span>
        <button disabled={page >= totalPages} onClick={() => setPage(page + 1)} className={`cursor-pointer text-2xl  text-white px-4 rounded-lg py-1 ${page >= totalPages ? 'bg-blue-400' : 'bg-blue-500'}`}>Next</button>
      </div>
    </div>
  );
};

export default App;
