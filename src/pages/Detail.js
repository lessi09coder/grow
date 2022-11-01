import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom"
import { getProductoId } from "../api/productos";
import { UserLayout } from "../components/UserLayout";

export const Detail = () => {
    const {productId} = useParams();
    const [product, setProduct] = useState({});

    useEffect(()=>{
        getProductoId(productId)
        .then((data)=>setProduct(data))
    },[productId])
    return(
            <UserLayout > <div>{product.nombre} sale $ {product.precio} </div> </UserLayout>
    )
}


//video del 27/10 minuto 1:05:52