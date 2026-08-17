import React from 'react'

const ProductCard = ({ product }) => {
    return (
        <div className='group w-full max-w-sm overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl'>

            <div className='relative h-64 overflow-hidden bg-gray-100'>
                <img
                    src={product.thumbnail}
                    alt={product.title}
                    className='h-full w-full object-contain p-6 transition duration-500 group-hover:scale-110'
                />

                <span className='absolute left-4 top-4 rounded-full bg-black px-3 py-1 text-xs font-semibold text-white'>
                    {product.brand}
                </span>

                <span className='absolute right-4 top-4 rounded-full bg-green-500 px-3 py-1 text-xs font-semibold text-white'>
                    {product.availabilityStatus}
                </span>
            </div>

            <div className='p-5'>
                <p className='mb-1 text-xs font-medium uppercase tracking-wider text-gray-400'>
                    {product.category}
                </p>

                <h2 className='line-clamp-1 text-lg font-bold text-gray-900'>
                    {product.title}
                </h2>

                <p className='mt-2 line-clamp-2 text-sm leading-6 text-gray-500'>
                    {product.description}
                </p>

                <div className='mt-4 flex items-center gap-2'>
                    <div className='flex items-center gap-1 rounded-md bg-yellow-50 px-2 py-1'>
                        <span className='text-yellow-500'>★</span>
                        <span className='text-sm font-semibold text-gray-700'>
                            {product.rating}
                        </span>
                    </div>

                    <span className='text-sm text-gray-400'>
                        ({product.reviews?.length || 0} reviews)
                    </span>
                </div>

                <div className='mt-5 flex items-end justify-between'>
                    <div>
                        <p className='text-2xl font-bold text-gray-900'>
                            ${product.price}
                        </p>

                        <p className='text-xs text-green-600'>
                            {product.discountPercentage}% OFF
                        </p>
                    </div>

                    <button className='rounded-xl bg-black px-5 py-2.5 text-sm font-semibold text-white transition duration-200 hover:bg-gray-800'>
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProductCard