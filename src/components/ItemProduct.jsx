
import React from 'react'
import imgFertilizante from '../assets/images/grow_fertilizantes.jpg';
import imgHerramienta from '../assets/images/grow_herramientas.jpg';
import imgMaceta from '../assets/images/grow_macetas.jpg';


const ItemProduct = () => {
   
    const arrayProductos= [
  
        {
          nombre:"Nitrox",
          precio:1500,
          descripcion:"Nitrogreno",
          tag:"nitrogeno",
          imagen: "imgFertilizante",
        },
        {
          nombre:"GrowTech",
          precio:4300,
          descripcion:"kit herramientas",
          tag:"",
          imagen:"",
        },
        {
          nombre:"Rocket",
          precio:1000,
          descripcion:"Macetas 5lts",
          tag:"",
          imagen:"",
        },
        
      ];   
   
   
   
      return (
        <div className='categorias'>
          <div>{arrayProductos.map(
          (prod,index) => <h2 key={index}> {prod.nombre}
          </h2>  
                                   
          )}</div>     
        </div>
        )
}


export default ItemProduct;

/*  
        <div>
          <h2>{greetings.producto1}</h2>            
            <span>{greetings.precios}</span>
            <img src={imgFertilizante}  alt="" />            
        </div>
        <div>
            <h2>{greetings.producto2} </h2>
            <span>{greetings.precios}</span>
            <img src={imgHerramienta}  alt="" />
        </div>
        <div>
        <h2>{greetings.producto3} </h2>
            <span>{greetings.precios}</span>
            <img src={imgMaceta}  alt="" />
        </div>
*/