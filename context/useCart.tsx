"use client";

import { CustomType } from "@/types/type";
import { ReactNode, createContext, useContext, useState } from "react";

interface CartProps {
  cart: CustomType[];
  addCart: (item: CustomType) => void;
  removeCart: (index: number) => void;
}

export const CartContext = createContext<CartProps>({
  cart: [],
  addCart: () => {},
  removeCart: () => {},
});

const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CustomType[]>([]);
  const addCart = (item: CustomType) => {
    setCart((cart) => [...cart, item]);
  };
  const removeCart = (index: number) => {
    setCart((cart) => cart.filter((_, i) => i !== index));
  };
  return (
    <CartContext.Provider value={{ cart, addCart, removeCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;

export const useCart = () => useContext(CartContext);
