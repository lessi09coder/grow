import { useState } from "react";
import { useContext, createContext } from "react";

export const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext)

export const CartProvider = ({ children }) => {

    const [carro, setCarro] = useState([]);    

    //Remover productos de la lista del carrito:
    const removeProducto = (id) => {
        const newCarro = carro.filter((producto) => producto.id !== id)
        setCarro(newCarro);
    }

    //addProductCart recibe el item o producto que vamos agregar y la cantidad qty
    const addProductCart = (item, qty) => {
        //console.log(item)
        //console.log({ item, qty })

        //validar si el producto existe
        //si no existe agregar al carrito
        //si existe aumentar la cantidad
        const element = carro.find((producto) => producto.id === item.id);
        if (!element) {
            //Si el elemento producto no existe, entonces carro que no tiene nada se le agrega el ...item/items segun que cantidad qty tenga el counter
            setCarro([...carro, { ...item, qty }])
        } else {
            //y si existe entonces newCarro es el array de objetos que se le agrega un atributo qty: con la cantidad que pasamos en qty y se acumula
            const newCarro = carro.map((producto) => {
                //aca vemos que mientras el producto coincida con el id del item, y no sobre pase el stock, se ejecuta la actualizacion del
                
                //if (producto.id === item.id && producto.stock > producto.qty) return { ...producto, qty: producto.qty + qty }; //esto anda bien, ya se puede borrar *

                if (producto.id === item.id && producto.stock > producto.qty && (producto.qty + qty <= producto.stock)) return { ...producto, qty: producto.qty + qty };
                return producto;
            });


            setCarro(newCarro);
        }
    }
    //Cantidad de productos en la lista del carrito:
    const getCarroQty = () => {
        return carro.reduce((acc, item) => acc + item.qty, 0);
    }
    //El precio total de la compra:
    const getTotalPrecio = () => carro.reduce((acc, item) => acc + item.precio * item.qty, 0);

    //Vaciar el carrito:
    const emptyCarro = () => setCarro([]);

    const value = {
        carro,
        addProductCart,
        removeProducto,
        getCarroQty,
        getTotalPrecio,
        emptyCarro,
    };

    return <CartContext.Provider value={value} displayName="carritoContexto"> {children} </CartContext.Provider>;
}

//TENER EN CUENTA QUE PRIMERO DEBERIAMOS VALIDAD SI HAY STOCK ANTES DE AGREGAR AL CARRITO