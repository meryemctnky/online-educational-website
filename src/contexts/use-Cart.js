import { createContext, useContext, useState } from "react";

export const CartContext = createContext();
export const useCart = () => useContext(CartContext);

const CartProvider = (props) => {
  const [cartList, setCartList] = useState([]);

  const addItemToCart = (data) => {
    setCartList([...cartList, data]);
  };

  const removeItemToCart = (data, i) => {
    const newCartList = [...cartList];
    newCartList.splice(i, 1);
    setCartList(newCartList);
  };

  return (
    <CartContext.Provider
      value={{ cartList, setCartList, addItemToCart, removeItemToCart }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
