import { keepPreviousData, useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import getProducts from "./api";
import ProductCard from "./ProductCard";

const Tanstack = () => {
    const limit = 10;
    const [page, setPage] = useState(1);

    const { data, isPending, errors, isPlaceholderData } = useQuery({
        queryKey: ["products", page],
        queryFn: () => getProducts(page, limit),
        placeholderData: keepPreviousData,
        staleTime: 1 * 60 * 1000,
        gcTime: 2 * 60 * 1000,
    });

    if (errors) return "Something Went Wrong!";
    if (isPending) return "Loading...";
    
    console.log(isPlaceholderData)
    const totalPages = Math.ceil(data.total / limit);

    return (
        <div className={`p-4 flex flex-col gap-14 pb-14 ${isPlaceholderData ? 'opacity-30' : 'opacity-100' }`}>
        <div className="grid grid-cols-4 gap-4">
            {data ? (
            data.products.map((p) => <ProductCard key={p.id} product={p} />)
            ) : (
            <h1 className="h-screen">Loading...</h1>
            )}
        </div>

        <div className="flex gap-2 justify-center items-center">
            <button
                disabled={page <= 0}
                onClick={() => setPage(page - 1)}
                className={`cursor-pointer text-2xl text-white px-4 rounded-lg py-1 ${page <= 0 ? "bg-blue-400" : "bg-blue-500"}`}
            >
            Prev
            </button>

            <span className="text-xl">
            {page} of {totalPages}
            </span>

            <button
            disabled={page >= totalPages}
            onClick={() => setPage(page + 1)}
            className={`cursor-pointer text-2xl  text-white px-4 rounded-lg py-1 ${page >= totalPages ? "bg-blue-400" : "bg-blue-500"}`}
            >
            Next
            </button>
        </div>
        </div>
    );
};

export default Tanstack;
