import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCartContext = () => {
    return useContext(CartContext);
};



export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const addToCart = (item) => {
        setCart([...cart, item]);
    };

    const selectProduct = (product) => {
        setSelectedProduct(product);
    };

 


    return (
        <CartContext.Provider value={{ cart, addToCart, selectedProduct, selectProduct }}>
            {children}
        </CartContext.Provider>
    );
};
