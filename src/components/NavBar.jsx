import CartWidget from './CartWidget'


const Navbar = (props) =>{
   return <div className="navbar"> 
    <span className="navbar__titulo"> {props.titulo} </span>
    <ul>
        <li> <a href="nav1"> {props.nav1}</a></li>
        <li> <a href="nav2"> {props.nav2}</a></li>
        <li> <a href="nav3"> {props.nav3}</a></li>
        <CartWidget />
        
    </ul>        
    
   </div>
}

export default Navbar;