import CartWidget from './CartWidget'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useCartContext } from '../context/CartContext';
import React from 'react';
import logo from '../assets/images/Logo.png'

const links = [
    { href: "/category/fertilizantes", label: "Fertilizantes" },
    { href: "/category/herramientas", label: "Herramientas" },
    { href: "/category/macetas", label: "Macetas" },
]


const Navbar = () => {
    const navigate = useNavigate();

    const { carro, getCarroQty } = useCartContext();
    //console.log({ carro })
    return (
        <header>
            <div className="navbar" > <img className='navbar__logo' src={logo} alt="logo" onClick={() => navigate("/")} />
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
                    <li> <Link to="/cart" key="carrito"> <CartWidget />{" "}<span> {getCarroQty()} </span> </Link> </li>
                </ul>
            </div>
        </header>
    )
}

export default Navbar