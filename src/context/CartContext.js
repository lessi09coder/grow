import { useState } from "react";
import { useContext, createContext } from "react";

export const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext)

export const CartProvider = ({ children }) => {

    const [carro, setCarro] = useState([]);


    //para no poner productos mas que los disponibles, vamos a usar el un contexto:
    // const [available, setAvailable] = useState(0);
    //console.log({ available })


    const comparator = () => {
        const newNotAvailable = carro.filter((item) => item.stock === item.qty)
        console.log(newNotAvailable)       
       
        /* if (item.stock === item.qty) {
            
        } */
    }

    //Remover productos de la lista del carrito:
    const removeProducto = (id) => {
        const newCarro = carro.filter((producto) => producto.id !== id)
        setCarro(newCarro);
    }

    //addProductCart recibe el item o producto que vamos agregar y la cantidad qty
    const addProductCart = (item, qty) => {
        //console.log({ item, qty })
        //validar si el producto existe
        //si no existe agregar al carrito
        //si existe aumentar la cantidad
        const element = carro.find((producto) => producto.id === item.id);
        if (!element) {
            //Si el elemento producto no existe, entonces carro que no tiene nada se le agrega el ...item/items segun que cantidad qty
            setCarro([...carro, { ...item, qty }])
        } else {
            //y si existe entonces newCarro es el array de objetos que se le agrega un atributo qty: con la cantidad que pasamos en qty y se acumula
            const newCarro = carro.map((producto) => {
                if (producto.id === item.id) {
                    return { ...producto, qty: producto.qty + qty }
                }
                return producto
            });
            setCarro(newCarro)
        }
    }
    //Cantidad de productos en la lista del carrito:
    const getCarroQty = () => {
        return carro.reduce((acc, item) => acc + item.qty, 0)
    }
    //El precio total de la compra:
    const getTotalPrecio = () => carro.reduce((acc, item) => acc + item.precio * item.qty, 0)

    //Vaciar el carrito:
    const emptyCarro = () => setCarro([]);

    const value = {
        carro,
        addProductCart,
        removeProducto,
        getCarroQty,
        getTotalPrecio,
        emptyCarro,
        comparator
    };

    return <CartContext.Provider value={value} displayName="carritoContexto"> {children} </CartContext.Provider>;
}

//TENER EN CUENTA QUE PRIMERO DEBERIAMOS VALIDAD SI HAY STOCK ANTES DE AGREGAR AL CARRITO