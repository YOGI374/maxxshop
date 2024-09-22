// In CartContext.js
import React, { useState } from 'react';

const CartContext = React.createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    
    setCart([...cart, product]);
    alert(`${product.name} added to cart!`); // Add this line
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };






