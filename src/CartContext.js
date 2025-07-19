
import React, { createContext, useEffect, useState } from "react";
import { toast } from 'react-toastify';



export const CartContext = createContext();


export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(() => {
        // Load cart from localStorage initially
        const storedCart = localStorage.getItem("cartItems");
        return storedCart ? JSON.parse(storedCart) : [];
    });

    useEffect(() => {
        // Save cart to localStorage whenever it changes
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = (product) => {
        setCartItems((prevCart) => [...prevCart, product],

            toast.success("Item added to cart!", {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })


        )
    };

    const removeFromCart = (index) => {
        setCartItems((prevCart) => prevCart.filter((_, i) => i !== index));
    };

    const clearCart = () => setCartItems([]);





    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};
