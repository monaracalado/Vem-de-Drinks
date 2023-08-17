import { createContext, useState } from "react";
import { ICart, IChildren } from "../utils/interface";

interface ICartContext {
  cart: ICart[] | [];
  totalItensInCart: number;
  totalItensPrice: string;
  deliveryPrice: number;
  totalPrice: string;
  incrementCartItemQuantity: (itemId: string) => void;
  decrementCartItemQuantity: (itemId: string) => void;
  addDrinkInCart: (drink: ICart) => void;
  removeDrinkInCart: (drinkIdToDelete: string) => void;
}

export const CartContext = createContext({} as ICartContext);

export function CartProvider({ children }: IChildren) {
  const [cart, setCart] = useState<ICart[] | []>([]);
  const totalItensInCart = cart.length;
  const totalItensPrice = cart
    .map((drink) => {
      return drink.quantity * drink.value;
    })
    .reduce((acc, currentValue) => acc + currentValue, 0)
    .toFixed(2);
  const deliveryPrice = 8.0;
  const totalPrice = parseFloat(totalItensPrice) > 0 ? (parseFloat(totalItensPrice) + deliveryPrice).toFixed(2) : '0.00';

  function incrementCartItemQuantity(itemId: string) {
    setCart((state) =>
      state.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  }

  function decrementCartItemQuantity(itemId: string) {
    setCart((state) =>
      state.map((item) =>
        item.id === itemId && item.quantity > 0
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  }

  function addDrinkInCart(drink: ICart) {
    const existingItem = cart.find((item) => item.id === drink.id);

    if (existingItem) {
      setCart((state) =>
        state.map((item) =>
          item.id === existingItem.id
            ? { ...item, quantity: item.quantity + drink.quantity }
            : item
        )
      );
    } else {
      setCart((state) => [...state, drink]);
    }}

  function removeDrinkInCart(drinkIdToDelete: string) {
    setCart((state) =>
      state.filter((drink) => drink.id !== drinkIdToDelete)
    );
  }

  console.log(cart);

  return (
    <CartContext.Provider
      value={{
        cart,
        totalItensInCart,
        totalItensPrice,
        deliveryPrice,
        totalPrice,
        incrementCartItemQuantity,
        decrementCartItemQuantity,
        addDrinkInCart,
        removeDrinkInCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
