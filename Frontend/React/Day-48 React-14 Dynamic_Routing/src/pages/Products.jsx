import { useNavigate } from "react-router";

const Products = ({ product }) => {

  const navigate = useNavigate();

  return (
    <div onClick={() => navigate(`/detail/${product.id}`)} className="w-72 rounded-xl border bg-white shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
      {/* Product Image */}
      <div className="h-64 bg-gray-100 flex items-center justify-center p-4">
        <img
          src={product.image}
          alt={product.title}
          className="h-full object-contain hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Product Details */}
      <div className="p-4 space-y-3">
        {/* Category */}
        <span className="text-xs bg-pink-100 text-pink-600 px-2 py-1 rounded-full capitalize">
          {product.category}
        </span>

        {/* Title */}
        <h2 className="font-semibold text-gray-800 line-clamp-2">
          {product.title}
        </h2>

        {/* Description */}
        <p className="text-sm text-gray-500 line-clamp-3">
          {product.description}
        </p>

        {/* Rating */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <span className="text-yellow-500">⭐</span>
            <span className="text-sm font-medium">
              {product.rating.rate}
            </span>
            <span className="text-xs text-gray-500">
              ({product.rating.count})
            </span>
          </div>

          {/* Price */}
          <span className="text-xl font-bold text-green-600">
            ${product.price}
          </span>
        </div>

        {/* Button */}
        <button className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Products;