import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

const ProductDetails = () => {
    const { id } = useParams(); // use to get dynamic path data - id 
    const [detailProduct, setDetailProduct] = useState({});
    
    const getProduct = async () => {
        try {
            const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
            setDetailProduct(res.data);
        } catch (error) {
            console.error("Error in product details API - ", error);
        }
    }

    useEffect(() => {
        getProduct();
    }, []);

    return (
        <div className="min-h-screen bg-gray-100 py-10 px-4">
            <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg p-8 grid md:grid-cols-2 gap-10">

            {/* Product Image */}
            <div className="bg-gray-50 rounded-xl flex items-center justify-center p-8">
                
            <img
                src={detailProduct.image}
                alt={detailProduct.title}
                className="h-96 object-contain hover:scale-105 transition duration-300"
            />
            </div>

            {/* Product Info */}
            <div className="flex flex-col justify-center">

            {/* Category */}
            <span className="w-fit bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full text-sm font-medium capitalize">
                {detailProduct.category}
            </span>

            {/* Title */}
            <h1 className="text-4xl font-bold mt-4 text-gray-800">
                {detailProduct.title}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-4">
                <span className="text-yellow-500 text-lg">⭐</span>
                <span className="font-medium text-black">
                {detailProduct.rating?.rate}
                </span>
                <span className="text-gray-500">
                ({detailProduct.rating?.count} reviews)
                </span>
            </div>

            {/* Price */}
            <h2 className="text-3xl font-bold text-green-600 mt-6">
                ${detailProduct.price}
            </h2>

            {/* Description */}
            <p className="text-gray-600 leading-7 mt-6">
                {detailProduct.description}
            </p>

            {/* Dummy Features */}
            <div className="mt-8 space-y-3 text-gray-700">
                <div className="flex items-center gap-2">
                <span>✅</span>
                <p>Premium Quality Product</p>
                </div>

                <div className="flex items-center gap-2">
                <span>🚚</span>
                <p>Free Shipping Available</p>
                </div>

                <div className="flex items-center gap-2">
                <span>🔄</span>
                <p>7 Days Easy Return</p>
                </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-4 mt-10">
                <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg transition">
                Add to Cart
                </button>

                <button className="border border-gray-300 hover:bg-gray-100 px-6 py-3 rounded-lg transitio text-black">
                Buy Now
                </button>
            </div>

            </div>
        </div>
        </div>
    );
};

export default ProductDetails;