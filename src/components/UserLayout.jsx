import Navbar from "./NavBar"
export const UserLayout = ({children}) => {
    return (
        <div>
            < Navbar titulo="Grow El Cañaveral" nav1="Iluminacion" nav2="Accesorios" nav3="Sustratos" carrito=""/> 
            {children}

        </div>
    )
}