const Item = (props) => {
    return ( <div className="card">
        <div className="card__top">
            <img src={props.imagen} alt="productoavender" />
            <h3>{props.precio} </h3>
        </div>
        <div className="card__bottom">
            <h2>{props.nombre} </h2>
            <span>{props.descripcion} </span>
            <span>{props.tag} </span>
        </div>
    </div> )
}

export default Item;