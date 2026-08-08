import { useQuery } from "@tanstack/react-query";
import React, { useCallback, useEffect, useState } from "react";
import { getProducts } from "../api/productsAPI";

// export const useProducts = () => {

//     const {data, error, isPending} = useQuery({
//         queryKey: ["products"],
//         queryFn: getProducts,
//     });

//     console.log(data); // Returns proxy Object;
//     return {data, error, isPending}
// }

export const useProducts = () => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getAllProducts = async () => {
        const data = await getProducts();
        setProducts(data);
        setFilteredProducts(data);
        setIsLoading(false);
        console.log(data)
    }

    const filterProducts = useCallback((searchParams) => {
        const updatedProducts = products.filter((p) => {
            return p.title.toLowerCase().includes(searchParams.toLowerCase());
        })
        setFilteredProducts(updatedProducts);
    }, [products]);

    console.log("Filtered Products - ", filteredProducts);

    useEffect(() => {
        getAllProducts();
    }, []);

    return {
        isLoading, filteredProducts, filterProducts
    }
}