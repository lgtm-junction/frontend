"use client";

import { CustomType } from "@/types/type";
import { ReactNode, createContext, useContext, useState } from "react";

interface CartItemType extends CustomType {
  isCustomized: boolean;
}
interface CartProps {
  cart: CartItemType[];
  addCart: (item: CartItemType) => void;
  removeCart: (index: number) => void;
}

export const CartContext = createContext<CartProps>({
  cart: [],
  addCart: () => {},
  removeCart: () => {},
});

const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItemType[]>([]);
  const addCart = (item: CartItemType) => {
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
