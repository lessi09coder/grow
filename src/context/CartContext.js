import { useState } from "react";
import { useContext, createContext } from "react";

export const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext)

export const CartProvider = ({ children }) => {

    const [carro, setCarro] = useState([]);
    
    const addProductCart =  (item, qty) => {
        console.log({item, qty})
        //validar si el producto existe
        //si no existe agregar al carrito
        //si existe aumentar la cantidad

        setCarro([...carro, item])
    }

    const value = {
        carro,
        addProductCart
    };

    

    return <CartContext.Provider value={value}> {children} </CartContext.Provider>;
}

// video 3/11 context minuto 16:00