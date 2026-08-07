import React from 'react'
import ProductCard from '../components/ProductCard';
import ProductCardSkeleton from '../components/ProductCardSkeleton';
import { useProducts } from '../hooks/useProducts';
import Filter from "../components/filter"

const Shop = () => {

    const { isPending, data, filteredProducts } = useProducts();

    return (
        <div>
            <Filter />
            <div>
                {
                    isPending ? (
                        <div className='grid grid-cols-4 gap-5'>
                            {Array.from({ length: 8 }).map((_, i) => {
                                return <ProductCardSkeleton key={i} />
                            })}
                        </div>
                    ) : ( 
                        <div className='grid grid-cols-4 gap-5'>
                            { data.map((p) => {
                                return <ProductCard key={p.id} product={p} />
                            }) }
                        </div>
                    )
                }
            </div>
       </div>
    )
}

export default Shop
