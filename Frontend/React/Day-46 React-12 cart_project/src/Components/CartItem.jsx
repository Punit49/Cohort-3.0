import React, { useContext } from "react";
import { MyStore } from "../Context/ProductContext";

const CartItem = ({ item }) => {
  const { setCartItems, increaseQuantity, decreaseQuantity } = useContext(MyStore);

  const removeItem = () => {
    setCartItems((prev) => prev.filter((i) => i.id !== item.id));
  };

  return (
    <div className="flex items-center justify-between bg-white border rounded-lg p-4 shadow-sm w-full">
      <div className="flex items-center gap-4">
        <img
          src={item.image}
          alt={item.title}
          className="w-20 h-20 rounded-md object-cover"
        />

        <div>
          <h2 className="text-lg font-semibold">{item.title}</h2>
          <p className="text-gray-500">₹{item.price}</p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center border rounded-md overflow-hidden">
          <button
            onClick={() => decreaseQuantity(item.id)}
            className="px-3 py-2 bg-gray-100 hover:bg-gray-200 text-lg"
          >
            −
          </button>

          <span className="px-4 font-semibold">
            {item.quantity}
          </span>

          <button
            onClick={ () => increaseQuantity(item.id) }
            className="px-3 py-2 bg-gray-100 hover:bg-gray-200 text-lg"
          >
            +
          </button>
        </div>

        <button
          onClick={removeItem}
          className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;