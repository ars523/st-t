import { createContext, useReducer } from "react";
import { ReactNode } from "react";

interface ICart {
  id: number;
  title: string;
  thumbnail: string;
  discountPercentage: number;
  price: number;
  brand: string;
  sku: string;
  quantity: number;

}

type Action = { type: "ADD_TO_CART"; payload: ICart } | { type: "REMOVE_FROM_CART"; payload: ICart }
type Dispatch = (action: Action) => void;

const CartContext = createContext<{ cart: ICart[]; dispatchCart: Dispatch } | undefined>(undefined);

const cartReducer = (state: ICart[], action: Action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return []
    case "REMOVE_FROM_CART":
      return []
    default:
      return state;
  }
}

const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, dispatchCart] = useReducer(cartReducer, []);
  const value = { cart, dispatchCart };

  return <CartContext value={value}>{children}</CartContext>;
}

export { CartContext, CartProvider };