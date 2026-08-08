import React from 'react'
import ProductCard from '../components/ProductCard';
import ProductCardSkeleton from '../components/ProductCardSkeleton';
import { useProducts } from '../hooks/useProducts';
import Filter from "../components/filter"

const Shop = () => {

    const { filteredProducts, filterProducts, isLoading } = useProducts();

    console.log(filteredProducts);

    return (
        <div>
            <Filter filterProducts={filterProducts}/>

            <div>
                {
                    isLoading ? (
                        <div className='grid grid-cols-4 gap-5'>
                            {Array.from({ length: 8 }).map((_, i) => {
                                return <ProductCardSkeleton key={i} />
                            })}
                        </div>
                    ) : ( 
                        <div className='grid grid-cols-4 gap-5'>
                            { filteredProducts.map((p) => {
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
