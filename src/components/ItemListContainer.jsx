import React from 'react'


//luego vamos a import desde image.js y con las prop las traemos ejemplo "images.img1"

import ListProducts from './ListProducts'


const ItemListContainer = () => {
  return (   
      
      <ListProducts />   
   
  )
}

export default ItemListContainer



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