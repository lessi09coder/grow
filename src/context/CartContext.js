import { createContext } from "react";

export const CartContext = createContext([]);

export const CartProvider = ({children}) => {
    return <CartContext.Provider valuel={[]}> {children} </CartContext.Provider>;
}

// video 3/11 context minuto 38:01