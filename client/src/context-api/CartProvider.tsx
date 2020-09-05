import React, { useState, useEffect } from "react";

export const CartContext = React.createContext({
  cart: [] as number[],
  setcart: {} as any,
});

export const CartProvider = (props: any) => {
  const [cart, setCart] = useState(() => {
    const localData = localStorage.getItem("cart");
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart: cart, setcart: setCart }}>
      {console.log(cart)}
      {props.children}
    </CartContext.Provider>
  );
};
