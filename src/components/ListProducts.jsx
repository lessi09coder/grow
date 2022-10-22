//import { useEffect, useState } from "react";
//import imgFertilizante from '../assets/images/grow_fertilizantes.jpg';
//import imgHerramienta from '../assets/images/grow_herramientas.jpg';
//import imgMaceta from '../assets/images/grow_macetas.jpg';

//const [productos,setProductos]= useState([]);
const ListProducts = () => {
    
    

    const arrayProductos= [
  
        {
          nombre:"Nitrox",
          precio:1500,
          descripcion:"Nitrogreno",
          tag:"nitrogeno",
          imagen:"url"
        },
        {
          nombre:"GrowTech",
          precio:4300,
          descripcion:"kit herramientas",
          tag:"",
          imagen:"url",
        },
        {
          nombre:"Rocket",
          precio:1000,
          descripcion:"Macetas 5lts",
          tag:"",
          imagen:"url",
        },
        
      ];   
      
     
      
    
    return(
        <div>
          {arrayProductos.map(
          (prod,index) => <h2 key={index}> {prod.nombre}</h2>
                          
          )}
        </div>
        )
      
    
  
}

export default ListProducts

/*  
let ArrProMap = productos.map(
        (item,index)=> ({...item, id:index}) // ...item recorre el el arr y le da un ID segun el indice del array (creamos una propiedad id:"idex")
      );
      console.log(ArrProMap)
      
*/