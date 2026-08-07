import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react'
import { getProducts } from '../api/productsAPI';

export const useProducts = () => {

    const [filteredProducts, setFilteredProducts] = useState(null);

    const {data, error, isPending} = useQuery({
        queryKey: ["products"], 
        queryFn: getProducts,
    });

    const getFilterProducts = (searchParams) => {
        const updatedProducts = data.filter((p) => {
            p.title.toLowerCase().includes(searchParams.toLowerCase());
        });
        if(updatedProducts){
            setFilteredProducts(updatedProducts);
        } else{
            setFilteredProducts(data);
        }
    }

    useEffect(() => {
        getFilterProducts();
    });

    console.log(data); // Returns proxy Object;
    return {data, error, isPending, getFilterProducts, filteredProducts}
}

