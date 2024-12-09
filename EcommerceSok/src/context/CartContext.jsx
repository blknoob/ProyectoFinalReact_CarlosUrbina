import React, { createContext, useState } from "react";

// Crear el contexto del carrito
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const isInCart = (id) => cart.some((item) => item.id === id);

  const addToCart = (product, quantity = 1) => {
    setCart((prevCart) => {
      const existProduct = prevCart.find((item) => item.id === product.id);

      if (existProduct) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }

      return [...prevCart, { ...product, quantity }];
    });
  };
  console.log(cart);

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, quantity) => {
    setCart((prevCart) =>
      prevCart.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const clearCart = () => setCart([]);

  const TotalPrice = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.price * item.quantity;
    });
    return total;
  };

  const TotalItems = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.quantity;
    });
    return total;
  };

  const ItemsCount = () => cart.length;

  const cartContextValue = {
    cart,
    isInCart,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    TotalPrice,
    TotalItems,
    ItemsCount,
  };

  return (
    <CartContext.Provider value={cartContextValue}>
      {children}
    </CartContext.Provider>
  );
};
