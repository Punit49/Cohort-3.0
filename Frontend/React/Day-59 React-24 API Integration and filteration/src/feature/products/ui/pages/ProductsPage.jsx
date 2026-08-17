import React from 'react'
import { useAllProducts, useGetProductByCategory } from '../../hooks/useProductsHook'
import ProductCard from '../components/ProductCard';
import Filter from '../components/Filter';

const ProductsPage = () => {

    const { data, isPending, errors, search, setSearch } = useAllProducts();
    const { category, data: categoryData, setCategory } = useGetProductByCategory();

    console.log(categoryData);

    return (
      <div className='min-h-screen bg-gray-50 px-8 py-10'>
            <div className='mx-auto max-w-7xl'>

                <h3 className='mb-8 text-3xl font-bold text-gray-900'>
                    Filter Products
                </h3>

                <Filter category={category} setCategory={setCategory} search={search} setSearch={setSearch} />
                
                <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                    {
                        categoryData && categoryData.length ? 
                            categoryData.map((product) => (
                                <ProductCard
                                    key={product.id}
                                    product={product}
                                />
                            )) : data && data.products.map((product) => (
                                <ProductCard
                                    key={product.id}
                                    product={product}
                                />
                            ))
                    } 
                </div>
            </div>
      </div>
    )
}

export default ProductsPage
