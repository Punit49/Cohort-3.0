import React, { useContext } from "react";
import { MyStore } from "../context/ProductContext";

const ProductCard = ({ product }) => {

  const {setCartItems} = useContext(MyStore);

  return (
    <div className="group overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl w-80">

      {/* Image */}
      <div className="relative overflow-hidden bg-gray-100 h-72">

        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-contain p-6 transition duration-500 group-hover:scale-110"
        />

        {/* Category */}
        <span className="absolute left-3 top-3 rounded-full bg-black px-3 py-1 text-xs font-semibold text-white capitalize">
          {product.category}
        </span>
      </div>

      {/* Content */}
      <div className="space-y-4 p-5">

        {/* Title */}
        <h2 className="line-clamp-2 text-lg font-semibold text-gray-800">
          {product.title}
        </h2>

        {/* Description */}
        <p className="line-clamp-2 text-sm text-gray-500">
          {product.description}
        </p>

        {/* Rating */}
        <div className="flex items-center justify-between">

          <div className="flex items-center gap-2">

            <div className="flex text-yellow-500">
              ★★★★★
            </div>

            <span className="text-sm font-medium">
              {product.rating.rate}
            </span>
          </div>

          <span className="text-sm text-gray-500">
            ({product.rating.count} Reviews)
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between">

          <h3 className="text-2xl font-bold text-black">
            ${product.price}
          </h3>

          <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
            In Stock
          </span>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 pt-2">

          <button className="flex-1 rounded-xl bg-black py-3 font-medium text-white transition hover:bg-gray-800" onClick={() => setCartItems(prev => [...prev, product])}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
