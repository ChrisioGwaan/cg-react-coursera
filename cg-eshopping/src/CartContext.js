import React, { createContext, useState, useContext } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({});

  const addToCart = (plant) => {
    setCart((prevCart) => ({
      ...prevCart,
      [plant.id]: prevCart[plant.id]
        ? { ...prevCart[plant.id], quantity: prevCart[plant.id].quantity + 1 }
        : { ...plant, quantity: 1 },
    }));
  };

  const increaseQuantity = (plantId) => {
    setCart((prevCart) => ({
      ...prevCart,
      [plantId]: {
        ...prevCart[plantId],
        quantity: prevCart[plantId].quantity + 1,
      },
    }));
  };

  const decreaseQuantity = (plantId) => {
    setCart((prevCart) => {
      if (prevCart[plantId].quantity === 1) {
        const updatedCart = { ...prevCart };
        delete updatedCart[plantId];
        return updatedCart;
      }
      return {
        ...prevCart,
        [plantId]: {
          ...prevCart[plantId],
          quantity: prevCart[plantId].quantity - 1,
        },
      };
    });
  };

  const removeFromCart = (plantId) => {
    setCart((prevCart) => {
      const updatedCart = { ...prevCart };
      delete updatedCart[plantId];
      return updatedCart;
    });
  };

  const getTotalItems = () =>
    Object.values(cart).reduce((sum, item) => sum + item.quantity, 0);

  const getTotalCost = () =>
    Object.values(cart).reduce(
      (sum, item) => sum + item.quantity * item.price,
      0
    );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
        getTotalItems,
        getTotalCost,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
