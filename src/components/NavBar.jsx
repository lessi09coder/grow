import CartWidget from './CartWidget'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useCartContext } from '../context/CartContext';
import React from 'react';


const links = [
    { href: "/category/fertilizantes", label: "Fertilizante" },
    { href: "/category/herramientas", label: "Herramientas" },
    { href: "/category/macetas", label: "Macetas" },
]


const Navbar = () => {
    const navigate = useNavigate();

    const { carro } = useCartContext();
    //console.log({carro}) 
    return (
        <header>
            <div className="navbar" ><h2 className='navbar__titulo' onClick={() => navigate("/")}>GrowShop El Cañaveral</h2>
                <ul>
                    {links.map(({ label, href }) => {                
                        return <React.Fragment key={label}>
                            <li>
                                <NavLink to={href} >
                                    {label}
                                </NavLink>
                            </li>
                        </React.Fragment>
                    }
                    )}
                    <li> <Link to="/carrito" key="carrito"> <CartWidget />{" "}<span> {carro.length} </span> </Link> </li>
                </ul>
            </div>


        </header>
    
    )
}

export default Navbar




/* <span className="navbar__titulo"> {props.titulo} </span>
<ul>
    <li> <a href="nav1"> {props.nav1}</a></li>
    <li> <a href="nav2"> {props.nav2}</a></li>
    <li> <a href="nav3"> {props.nav3}</a></li>
    <CartWidget />
    
</ul>        

</div> */