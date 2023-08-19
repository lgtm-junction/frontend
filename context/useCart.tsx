"use client";

import { CustomType } from "@/types/type";
import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useMemo,
} from "react";
import useCachedState from "./useCachedState";

const CACHE_KEY_CART = "cart";

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
  const [cart, setCart] = useCachedState<CartItemType[]>(CACHE_KEY_CART, []);

  const addCart = useCallback(
    (item: CartItemType) => {
      setCart((cart) => [...cart, item]);
    },
    [setCart]
  );

  const removeCart = useCallback(
    (index: number) => {
      setCart((cart) => cart.filter((_, i) => i !== index));
    },
    [setCart]
  );

  const contextValues = useMemo(
    () => ({ cart, addCart, removeCart }),
    [cart, addCart, removeCart]
  );

  return (
    <CartContext.Provider value={contextValues}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;

export const useCart = () => useContext(CartContext);
