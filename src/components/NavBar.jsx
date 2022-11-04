import CartWidget from './CartWidget'
import { NavLink, useNavigate } from 'react-router-dom'

const links = [
    { href: "/category/fertilizantes", label: "Fertilizante" },
    { href: "/category/herramientas", label: "Herramientas" },
    { href: "/category/macetas", label: "Macetas" },
]


const Navbar = () => {
    const navigate = useNavigate();


    return (
        <header>
            <div className="navbar" ><h2 className='navbar__titulo' onClick={() => navigate("/")}>GrowShop El Cañaveral</h2>
                <ul>
                    {links.map(({ label, href }) => {
                        return <li> <NavLink to={href} key={label}>
                            {label}
                        </NavLink> </li>
                    }
                    )}
                    <li><CartWidget /></li>
                </ul>
            </div>


        </header>
    )
}

export default Navbar




{/* <span className="navbar__titulo"> {props.titulo} </span>
<ul>
    <li> <a href="nav1"> {props.nav1}</a></li>
    <li> <a href="nav2"> {props.nav2}</a></li>
    <li> <a href="nav3"> {props.nav3}</a></li>
    <CartWidget />
    
</ul>        

</div> */}