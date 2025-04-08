import { useState } from "react";
import { CartContext } from "../contexts/CartContext";

const CartProvider = ({ children }) => {
  const [cartItem, setCartItem] = useState(
    parseInt(localStorage.getItem("cart-items")) || 0
  );
  return (
    <CartContext.Provider value={[cartItem, setCartItem]}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
