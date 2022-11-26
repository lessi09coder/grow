import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom"
import { getProductoId } from "../api/productos";
import { UserLayout } from "../components/UserLayout";
import { Counter } from "../components/Counter";
import { useCartContext } from "../context/CartContext";

export const Detail = () => {
    const { productId } = useParams();
    const { addProductCart } = useCartContext();
    const [product, setProduct] = useState({});

    //console.log(productId)
    //traemos "product" con el getProductoId (trae el objeto que coincide con su ID unica)
    useEffect(() => {
        getProductoId(productId)
            .then((data) => setProduct(data))
    }, [productId])

    const handleAdd = (qty) => {
        //console.log("producto agregado",{...product, contador});
        addProductCart(product, qty);
    }

    if (!Object.keys(product).length) {
        return <div className="Loading">Loading...</div>;
    }
    return (
        <UserLayout >
            <div className="categorias">
                <div className="card">
                    <div className="card__top">
                        <img src={product.imagen} alt="productoavender" />
                        <h3>{product.precio}</h3>
                    </div>
                    <div className="card__bottom">
                        <h2>{product.nombre}</h2>
                        <span>{product.descripcion} </span>
                    </div>
                </div>
                {/*  desde item me trae el boton de agregar al carrito y se repite, en details precisamos el boton de COUNTER para agregar al cart
                
                <Item
                    nombre={product.nombre}
                    descripcion={product.descripcion}
                    tag={product.tag}
                    id={product.id}
                    precio={product.precio}
                    imagen={product.imagen}
                    stock={product.stock}
                    key={product.id}
                /> */}
            </div>
            <div className="count">
                <span>Disponibles: {product.stock} </span>
                <Counter stock={product?.stock} onAddCart={handleAdd} />
            </div>
        </UserLayout>
    )
}

//ordenar codigo con "shift + alt + f"