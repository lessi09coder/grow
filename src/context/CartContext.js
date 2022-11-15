import { useState } from "react";
import { useContext, createContext } from "react";

export const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext)

export const CartProvider = ({ children }) => {

    const [carro, setCarro] = useState([{item: "zapato"},{item: "zapato"}]);
    
    const addProductCart =  (item) => {
        setCarro([...carro, item])
    }
    
    const value = {
        carro,
        addProductCart
    };

    

    return <CartContext.Provider value={value}> {children} </CartContext.Provider>;
}

// video 3/11 context minuto 16:00