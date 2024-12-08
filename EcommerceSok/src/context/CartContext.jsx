import React, { createContext, useState } from "react";

// Crear el contexto del carrito
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Verificar si un producto ya está en el carrito
  const isInCart = (id) => cart.some((item) => item.id === id);

  // Agregar un producto al carrito
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
  // Remover un producto del carrito
  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // Actualizar la cantidad de un producto en el carrito
  const updateQuantity = (id, quantity) => {
    setCart((prevCart) =>
      prevCart.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  // Vaciar el carrito
  const clearCart = () => setCart([]);

  // Calcular el precio total del carrito
  const TotalPrice = () => {
    let total = 0;
    cart.forEach(item => {
      total += item.price * item.quantity;
    });
    return total;
  };
  
  // Calcular la cantidad total de productos en el carrito
  const TotalItems = () => {
    let total = 0;
    cart.forEach(item => {
      total += item.quantity;
    });
    return total;
  };

  // Obtener el número total de productos distintos en el carrito
  const ItemsCount = () => {
    let count = 0;
    cart.forEach(() => {
      count += 1;
    });
    return count;
  };

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
