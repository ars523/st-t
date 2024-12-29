import { createContext, useReducer } from "react";
import { ReactNode } from "react";
import { IProduct } from "../types";

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

type Action = { type: "ADD_TO_CART"; payload: IProduct } | { type: "REMOVE_FROM_CART"; payload: IProduct }
type Dispatch = (action: Action) => void;

const CartContext = createContext<{ cart: ICart[]; dispatchCart: Dispatch } | undefined>(undefined);

const cartReducer = (state: ICart[], action: Action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      {
        const alreadyInCart = state.find((item) => item.id === action.payload.id);
        if (alreadyInCart) {
          return state.map((item) => item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item);
        } else {
          const newItem = {
            id: action.payload.id,
            title: action.payload.title,
            thumbnail: action.payload.thumbnail,
            discountPercentage: action.payload.discountPercentage,
            price: action.payload.price,
            brand: action.payload.brand,
            sku: action.payload.sku,
            quantity: 1
          }
          return [...state, { ...newItem }];
        }
      }
    case "REMOVE_FROM_CART":
      {
        return state.filter((item) => item.id !== action.payload.id);
      }
    default:
      return state;
  }
};

const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, dispatchCart] = useReducer(cartReducer, []);
  const value = { cart, dispatchCart };

  return <CartContext value={value}>{children}</CartContext>;
}

export { CartContext, CartProvider };