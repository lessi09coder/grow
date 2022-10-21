import React from 'react'

import imgFertilizante from '../assets/images/grow_fertilizantes.jpg';
import imgHerramienta from '../assets/images/grow_herramientas.jpg';
import imgMaceta from '../assets/images/grow_macetas.jpg';
//luego vamos a import desde image.js y con las prop las traemos ejemplo "images.img1"

export const ItemListContainer = () => {
  return (
    <div className='categorias'>
       
        <div>
            <h2>Nitrogeno</h2>
            <span>$900</span>
            <img src={imgFertilizante}  alt="" />            
        </div>
        <div>
            <h2>Kit Herramientas</h2>
            <span>$1500</span>
            <img src={imgHerramienta}  alt="" />
        </div>
        <div>
            <h2>Maceta de 5 litros</h2>
            <span>$500</span>
            <img src={imgMaceta}  alt="" />
        </div>


    </div>
   
  )
}
