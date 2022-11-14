import Navbar from "./NavBar"
import {Footer} from "./Footer"
export const UserLayout = ({children}) => {
    return (
        <div>
            < Navbar titulo="Grow El Cañaveral" nav1="Iluminacion" nav2="Accesorios" nav3="Sustratos" /> 
            {children}
            <Footer/>
        </div>
    )
}