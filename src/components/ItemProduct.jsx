import Item from './Item'
import { useEffect, useState } from 'react';
import { getProductos } from '../api/productos';
//import { useParams } from 'react-router-dom';

const ItemProduct = () => {
  //const { categoryId } = useParams();//con el useParams podemos traer los productos por categoria y usarlos en el BrowserRoute pagina principal
  const [productos, setProductos] = useState([]);
  //tenemos que crear un useState(true) para el "cargando" de la web y luego que pase a false (crear el componente correspondiente)
  useEffect(() => {
    setProductos([])
    getProductos()
      .then(items => {
        setProductos(items)
      }) //aca adentro va el usestate "cargando " pasando a false
      .catch(error => console.log(error))

  }, []); /* ,[categoryId]) */

  return (
    <div className='categorias'>
      {productos.map((producto) => {
        return <Item
          nombre={producto.nombre}
          descripcion={producto.descripcion}
          tag={producto.tag}
          id={producto.id}
          precio={producto.precio}
          imagen={producto.imagen} />
      })}
    </div>
  )
}

export default ItemProduct;

/*useEffect(() => {
    getProductos(categoryId)
      .then(items => setProductos(items)) //aca adentro va el usestate "cargando " pasando a false
      .catch(error => console.log(error))

  }, [categoryId])*/