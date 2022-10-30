
import React from 'react';
import Item from './Item'

import { useEffect, useState } from 'react';
import { getProductos } from '../api/productos';

const ItemProduct = () => {
   
      const [productos, setProductos]= useState([]);

      useEffect(()=>{
        getProductos()
          .then(items => setProductos(items))
          .catch(e => console.log(e))

      },[])
      return (
        <div className='categorias'>
          {productos.map((producto)=> {
            return <Item 
            nombre={producto.nombre} 
            descripcion ={producto.descripcion} 
            tag={producto.tag} 
            precio={producto.precio} 
            imagen={producto.imagen} />
          })}
        </div>
        )
}


//mirar la clase del profe de maps para traerlo, lo de arriba esta mal

export default ItemProduct;

