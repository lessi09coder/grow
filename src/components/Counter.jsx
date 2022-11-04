import { useEffect } from "react";
import { useState } from "react";
import  Boton from "./Boton";

export const Counter = ({stock, onAddCart}) => {
    const [contador, setContador] = useState(0);

    const agregar = () => {
        //console.log("quiero sumar")
        if(contador<stock){
            setContador( contador + 1 )
        }        
        ;
    }

    const restar = () => {
        //console.log("quiero restar")
        if(contador>0)
        setContador( contador - 1 )
    }

    useEffect(()=>{
        console.log(stock)
    })
    return (
        <div>
            <Boton onClick={() => agregar()}> SUMAR </Boton>            
            <span>{contador} </span>
            <Boton onClick={() => restar()}> RESTAR </Boton>
            <Boton onClick={()=> {
                if(contador >= 1) // o podemos poner (contador) porque si es "0" es false
               onAddCart()
                
            }}>Agregar al carrito</Boton>
        </div>

    )
}