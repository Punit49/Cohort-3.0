import { useContext } from "react";
import CartItem from "./CartItem";
import { MyStore } from "../Context/ProductContext";

const Cart = () => {

    const {cartItems} = useContext(MyStore);

    return (
        <div className="max-w-4xl mx-auto p-6">

        <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>

        {
            cartItems.length === 0? (
                <h1 className="text-3xl font-bold">Cart Is Empty</h1>
            ) : (
                <div className="space-y-4 flex gap-5 flex-wrap">
                    {
                        cartItems.map((i) => {
                            return <CartItem key={i.id} item={i} />
                        })
                    }
                </div>
            )
        }

        </div>
    );
};

export default Cart;