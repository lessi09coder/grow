import { useState } from "react";
import { UserLayout } from "../components/UserLayout"
import { useCartContext } from "../context/CartContext"
import Boton from "../components/Boton"
import { addOrder } from "../api/orders";

export const Cart = () => {
    const { getTotalPrecio, carro , emptyCarro} = useCartContext();

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");

    //Para crear la orden de compra:
    const createOrder = async () => {

        //Los items a comprar:
        const itemsOrders = carro.map(({ id, nombre, qty, precio }) => ({
            id,
            title: nombre,
            qty,
            price: precio,
        }));

        //la orden con los datos del cliente:
        const order = {
            buyer: { name, phone, email },
            itemsOrders,
            total: getTotalPrecio(),
        };
        
        const id = await addOrder(order)
        /* addOrder(order);   para agregar la compra a firestone*/
        
        //luego de la compra, vaciamos el carrito:
        emptyCarro();
        console.log({ order })
        console.log({ itemsOrders })
    }

    return (
        <UserLayout>

            {/* creamos la tabla con los datos de los productos a comprar y mostramos precio final*/}
            <table className="Cart">
                <tr>
                    <th>Nombre del producto:</th>
                    <th>Descripcion:</th>
                    <th>Precio c/u: </th>
                    <th>Cantidad: </th>
                    <th>Sub total: </th>
                </tr>

                {carro.map(product => <tr key={product.id} className="Cart__cell">
                    <td>{product.nombre}</td><td>{product.descripcion}</td><td>${product.precio}</td><td>{product.qty}</td><td>${product.precio * product.qty}</td>
                </tr>)}

                <div className="Cart__total">TOTAL de compra: ${getTotalPrecio()}</div>
            </table>

            {/*Este es el formulario de compra pedido al cliente */}
            <div style={{ display: "grid", gap: 10 }}>
                <span>Nombre</span>
                <input
                    style={{ border: "1px solid black", height: 40, width: 300 }}
                    onChange={(e) => setName(e.target.value)}
                />
                <span>Telefono</span>
                <input
                    style={{ border: "1px solid black", height: 40, width: 300 }}
                    onChange={(e) => setPhone(e.target.value)}
                />
                <span>Email</span>
                <input
                    style={{ border: "1px solid black", marginBottom: 15, height: 40, width: 300 }}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <Boton onClick={createOrder}>Comprar </Boton>
            <Boton onClick={emptyCarro}>Vaciar carrito </Boton>
        </UserLayout>
    )
}