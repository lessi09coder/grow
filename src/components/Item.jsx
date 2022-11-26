import { useNavigate } from "react-router-dom";
import { useCartContext } from "../context/CartContext";

export const Item = ({ id, precio, imagen, nombre, categoria, tag, descripcion, stock }) => {
    const navigate = useNavigate();

    const { addProductCart } = useCartContext();

    return (
        <div className="card" onClick={() => navigate(`/product/${id}`)}>
            <div className="card__top">
                <img src={imagen} alt="productoavender" />
                <h3>${precio} </h3>
            </div>
            <div className="card__bottom">
                <h2>{nombre} </h2>
                <span>{descripcion} </span>
                <span>{tag} </span>
                <span>DISPONIBLES: {stock} </span>

                <button onClick={(e) => {
                    e.stopPropagation();                    
                    addProductCart({ id, nombre, precio, categoria, tag, descripcion }, 1)
                }}>AGREGAR AL CARRITO</button>

            </div>
        </div>)
}
