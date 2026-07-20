import React from "react";
import { useContext } from "react";
import { MyStore } from "../Context/ProductContext";

const ProductCard = ({product, isInCart}) => {

  const {setCartItems, increaseQuantity, decreaseQuantity} = useContext(MyStore);

  const handleCartAdd = () => {
    setCartItems(prev => [...prev, {...product, quantity: 1}]);
    alert("Item Added to the cart");
  }

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl duration-300 hover:-translate-y-2 w-80">

      <div className="bg-gray-100 h-64 overflow-hidden">
        <img
          src={product.image}
          alt=""
          className="w-full h-full object-cover hover:scale-110 duration-500"
        />
      </div>

      <div className="p-5">

        <span className="text-sm text-purple-600 font-semibold uppercase">
          {product.category}
        </span>

        <h2 className="text-2xl font-bold mt-2">
          {product.title}
        </h2>

        <p className="text-gray-500 text-sm mt-2">
          {product.description.slice(0, 80)}
        </p>

        <div className="flex items-center justify-between mt-5">

          <div>
            <span className="text-3xl font-bold text-gray-900">
              ₹{product.price}
            </span>
          </div>

          <div className="text-yellow-500 font-semibold">
            ⭐{product.rating.rate}
          </div>
        </div>

        {isInCart ? (
          <div className="flex items-center justify-between w-full border border-indigo-600 rounded-lg overflow-hidden">
            <button onClick={() => decreaseQuantity(isInCart.id)} className="w-12 py-2 text-lg font-semibold hover:bg-indigo-50">
              -
            </button>

            <span className="flex-1 text-center font-semibold">
              {isInCart.quantity}
            </span>

            <button onClick={() => increaseQuantity(isInCart.id)} className="w-12 py-2 text-lg font-semibold hover:bg-indigo-50">
              +
            </button>
          </div>
        ) : (
          <button onClick={handleCartAdd} className="w-full mt-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold hover:scale-105 duration-300">
            Add To Cart
          </button>
        )} 
      </div>
    </div>
  );
};

export default ProductCard;