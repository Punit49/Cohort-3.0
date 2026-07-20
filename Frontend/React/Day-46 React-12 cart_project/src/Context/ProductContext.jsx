import { useContext, useState } from "react";
import { createContext } from "react";

export const MyStore = createContext();

export const ProductContextProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const increaseQuantity = (id) => {
    setCartItems((prev) => {
      return prev.map((i) => {
        return id === i.id ? { ...i, quantity: i.quantity + 1 } : i;
      });
    });
  };

  //Optimize it -------- 
  const decreaseQuantity = (id) => {
    let item = cartItems.find((i) => i.id === id);
    if(item.quantity === 1){
      setCartItems((prev) => prev.filter((item) => {
        item.id !== id;
      }));
      alert("Item removed from the cart");
    } else {
      setCartItems((prev) => {
        return prev.map((i) => {
          return id === i.id ? { ...i, quantity: i.quantity - 1 } : i;
        });
      });
    }
  };

  return (
    <MyStore.Provider
      value={{
        isCartOpen,
        setIsCartOpen,
        cartItems,
        setCartItems,
        increaseQuantity,
        decreaseQuantity
      }}
    >
      {children}
    </MyStore.Provider>
  );
};
