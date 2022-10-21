import React from 'react'

import imgFertilizante from '../assets/images/grow_fertilizantes.jpg';
import imgHerramienta from '../assets/images/grow_herramientas.jpg';
import imgMaceta from '../assets/images/grow_macetas.jpg';
//luego vamos a import desde image.js y con las prop las traemos ejemplo "images.img1"



export const ItemListContainer = (greetings) => {
  return (
    <div className='categorias'>
       
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


    </div>
   
  )
}
