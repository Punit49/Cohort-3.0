import { useQuery } from "@tanstack/react-query"
import { getAllProducts, getProductsByCategory, getProductsCategories } from "../api/productsAPI"
import { useEffect, useState } from "react";

export const useAllProducts = () => {
    const [search, setSearch] = useState(null);
    const [debounceSearch, setDebounceSearch] = useState(search);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setDebounceSearch(search);
        }, 700);

        return () => clearTimeout(timeout);
    });
    
    const { data, errors, isPending } = useQuery({
        queryKey: ['Products', debounceSearch], 
        queryFn: () => getAllProducts(debounceSearch)
    });

    return {
        data, isPending, errors, setSearch, search
    }
}

export const useProductCategories = () => {
    return useQuery({
        queryKey: ['categories'],
        queryFn: getProductsCategories
    });
}

export const useGetProductByCategory = () => {

    const [category, setCategory] = useState(null);

    const { data } = useQuery({
        queryKey: ['productByCategory', category],
        queryFn: () => getProductsByCategory(category)
    });


    return {
        category, setCategory, data: data?.products
    }
}