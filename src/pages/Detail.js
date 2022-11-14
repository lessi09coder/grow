import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom"
import { getProductoId } from "../api/productos";
import { UserLayout } from "../components/UserLayout";
import { Counter } from "../components/Counter";

export const Detail = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState({});
    console.log(productId)
    //traemos "product" con el getProductoId (trae el objeto que coincide con su ID unica)
    useEffect(() => {
        getProductoId(productId)
            .then((data) => setProduct(data))
    }, [productId])
    return (
        <UserLayout >
            <div>{product.nombre} sale $ {product.precio} </div>
            <Counter onAddCart={() => console.log("agregar carrito")} stock={5} />
        </UserLayout>
    )
}


//video del 27/10 minuto 1:05:52
//ordenar codigo con "shift + alt + f"