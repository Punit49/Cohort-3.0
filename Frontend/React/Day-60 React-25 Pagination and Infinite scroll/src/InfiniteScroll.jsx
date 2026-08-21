import { useInfiniteQuery } from "@tanstack/react-query";
import React from "react";
import getProducts from "./apiInfinite";
import ProductCard from "./ProductCard";

const InfiniteScroll = () => {
    const limit = 40;

    const { data, isPending, hasNextPage, fetchNextPage, isFetchingNextPage } = useInfiniteQuery({
        queryKey: ['products'],
        queryFn: ({pageParam}) => getProducts(limit, pageParam),
        initialPageParam: 0,
        getNextPageParam: (lastPage, allPages) => {
            const loadedData = allPages.length * limit;
            if(loadedData < lastPage.total) return loadedData;
            return undefined;
        }
    });

    if (isPending) return "loading...";

    const products = data?.pages.flatMap((val) => {
        console.log("val -> ", val);
        return val.products;
    }) ?? [];

    return (
        <div className="flex flex-col gap-8 items-center p-8">
            <div className="grid grid-cols-3 gap-4">
                {
                    products.map((p) => {
                        return <ProductCard product={p} key={p.id} />
                    })
                }
            </div>

            {
                hasNextPage && (
                    <button onClick={fetchNextPage} className="p-2 bg-blue-700 rounded-md text-white px-6">
                        {isFetchingNextPage ? "Loading..." : "Load More"}
                    </button>
                )
            }
        </div>
    );
};

export default InfiniteScroll;
