import React, { createContext, useReducer, useContext, useEffect } from 'react';
import reducer from './CartReducer';

const CartContext = createContext();

const getLocalStorageData = () => {
    try {
        const localCartData = localStorage.getItem("CartData");
        return localCartData ? JSON.parse(localCartData) : [];
    } catch (error) {
        console.error("Error parsing local storage data:", error);
        return [];
    }
};

const initialState = {
    cart: getLocalStorageData(),
    totalItems: 0,
    totalAmount: 0,
    shippingfee:0,
};

const CartProvider1 = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const addToCart = (ProductId, amount, product, selectedColor) => {
        console.log('Add to Cart:', { product, selectedColor, amount, ProductId });
        dispatch({
            type: 'ADD_TO_CART',
            payload: { product, selectedColor, amount, ProductId },
        });
    };

     const setIncrement = (ProductId)=>{
        dispatch({
            type:'SET_INC',
            payload:ProductId
        })

     }

     const setDecrement = (ProductId)=>{
        dispatch({
            type:'SET_DEC',
            payload:ProductId
        })

     }



    const removeItem = (ProductId) => {
        console.log('REMOVE_FROM_CART', ProductId);
        dispatch({
            type: 'REMOVE_FROM_CART',
            payload: ProductId,
        });
    };

    const cleanItem = () => {
        dispatch({
            type: 'CLEAN_ITEM',
        });
    };

    useEffect(() => {
        dispatch({type : "CART_TOTAL_ITEM"})
        dispatch({type :"CART_TOTAL_PRICE"})
        
        localStorage.setItem("CartData", JSON.stringify(state.cart));
    }, [state.cart]);

    return (
        <CartContext.Provider value={{ ...state, addToCart, removeItem, cleanItem ,setIncrement ,setDecrement}}>
            {children}
        </CartContext.Provider>
    );
};

const useCartContext1 = () => {
    return useContext(CartContext);
};

export { CartProvider1, useCartContext1 };
