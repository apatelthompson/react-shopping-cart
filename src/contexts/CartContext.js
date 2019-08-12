import React, { useState, createContext } from "react";

export const CartContext = createContext();

export const CardProvider = () => {
  const [cart, setcart] = useState([]);

  return (
    <div>
      <CartContext.Provider>{props.children}</CartContext.Provider>
    </div>
  );
};
