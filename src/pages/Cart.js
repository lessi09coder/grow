import { useState } from "react";
import { UserLayout } from "../components/UserLayout"
import { useCartContext } from "../context/CartContext"
import Boton from "../components/Boton"
import { addOrder } from "../api/orders";
import Swal from 'sweetalert2'

export const Cart = () => {
    const { getTotalPrecio, carro, emptyCarro } = useCartContext();

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [emailA, setEmailA] = useState("");
    const [emailB, setEmailB] = useState("");



    //Validacion de email
    const emailValidation = () => {

        //creamos un regex que permita nombre y apellido, hasta 3era palabra opcional
        const regName = /^[a-zA-Z]+\s[a-zA-Z]+\s?[a-zA-Z]+$/;
        if (regName.test(name)) {

            //creamos un regex para verificar que es valido:
            const regEmail = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
            //si es valido, entonces:
            if (regEmail.test(emailA)) {
                //validamos que el email que pusimos sea el que queramos:
                if (emailA === emailB) {
                    createOrder()
                }
            }
        } else console.log("mal nombre")




    }
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
            buyer: { name, phone, emailA },
            itemsOrders,
            total: getTotalPrecio(),
        };

        const id = await addOrder(order); //devuelve el ID y hace la orden de compra.
        console.log(id);

        //Creamos el alert para la confirmacion de compra
        const alertBuyOrder = () => {
            Swal.fire(
                'Su compra esta ordenada', `Su comprobante es ${id}`, 'success'
            )
        }
        alertBuyOrder()

        //addOrder(order); este no se usaria si usamos " id = await... ".

        //luego de la compra, vaciamos el carrito:
        emptyCarro();
        //console.log({ order }) 
        //console.log({ itemsOrders })

        // console.log(setEmailA)
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

                <div className="Cart__total">TOTAL de compras: ${getTotalPrecio()}</div>
            </table>

            {/*Este es el formulario de compra pedido al cliente */}
            <div className="forms" >
                <span>Nombre y Apellido:</span>
                <input
                    onChange={(e) => setName(e.target.value)}
                />
                <span>Telefono:</span>
                <input
                    onChange={(e) => setPhone(e.target.value)}
                />
                <span>Email:</span>
                <input
                    onChange={(e) => setEmailA(e.target.value)}
                />
                <span>Reingrese su Email:</span>
                <input
                    onChange={(e) => setEmailB(e.target.value)}
                />
            </div>
            <div className="buttonOrder">
                <Boton onClick={emailValidation}>Comprar </Boton>
                <Boton onClick={emptyCarro}>Vaciar carrito </Boton>
            </div>
        </UserLayout>
    )
}