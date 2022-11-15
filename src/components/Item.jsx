import { useNavigate } from "react-router-dom";
import { useCartContext } from "../context/CartContext";

const Item = (props) => {
    const navigate = useNavigate(); 
    
    const {addProductCart} = useCartContext

    return (<div className="card" onClick={() => navigate(`/product/${props.id}`)}>
        <div className="card__top">
            <img src={props.imagen} alt="productoavender" />
            <h3>${props.precio} </h3>
        </div>
        <div className="card__bottom">
            <h2>{props.nombre} </h2>
            <span>{props.descripcion} </span>
            <span>{props.tag} </span>
            
            <button onClick={(e) => {
                e.stopPropagation();
                addProductCart(props)
            }}>AGREGAR AL CARRITO</button>
            
        </div>
    </div>)
}

export default Item;