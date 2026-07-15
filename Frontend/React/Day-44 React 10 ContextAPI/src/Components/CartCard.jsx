import React from "react";

const CartCard = ({ item }) => {
  return (
    <div className="flex items-start gap-6 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow-md transition flex-col">

      {/* Product Image */}
      <div className="h-28 w-28 flex-shrink-0 rounded-xl bg-gray-100 flex items-center justify-center">
        <img
          src={item.image}
          alt={item.title}
          className="h-24 object-contain"
        />
      </div>

      {/* Product Details */}
      <div className="flex-1">
        <span className="rounded-full bg-gray-100 px-3 py-1 text-xs capitalize text-gray-600">
          {item.category}
        </span>

        <h2 className="mt-2 text-lg font-semibold line-clamp-2">
          {item.title}
        </h2>

        <p className="mt-2 text-sm text-gray-500 line-clamp-2">
          {item.description}
        </p>
      </div>

      {/* Price & Remove */}
      <div className="flex items-center items-end gap-4 ">
        <h3 className="text-2xl font-bold text-gray-900">
          ${item.price}
        </h3>

        <button className="rounded-lg border border-red-500 px-4 py-2 text-sm font-medium text-red-500 transition hover:bg-red-500 hover:text-white">
          Remove
        </button>
      </div>

    </div>
  );
};

export default CartCard;