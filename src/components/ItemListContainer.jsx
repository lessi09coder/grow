import React from 'react'


//luego vamos a import desde image.js y con las prop las traemos ejemplo "images.img1"

import ListProducts from './ListProducts'


export const ItemListContainer = () => {
  return (
    <div className='categorias'>
           
        
        <ListProducts />
       


    </div>
   
  )
}





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