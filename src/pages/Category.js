import { useEffect, useState } from 'react';
import { getProductosPorCategoria } from '../api/productos';
import { useParams } from 'react-router-dom';
import Item from '../components/Item';
import { UserLayout } from '../components/UserLayout';

export const Category = () => {

    const { categoryId } = useParams();//con el useParams podemos traer los productos por categoria y usarlos en el BrowserRoute pagina principal
    const [productos, setProductos] = useState([]);
    //tenemos que crear un useState(true) para el "cargando" de la web y luego que pase a false (crear el componente correspondiente)
    useEffect(() => {
        setProductos([])
        getProductosPorCategoria(categoryId)
            .then(items => {
                setProductos(items)
            }) //aca adentro va el usestate "cargando " pasando a false
            .catch(error => console.log(error))

    }, [categoryId])

    return (
        <UserLayout>
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
        </UserLayout>
    )
}









/* import { UserLayout } from '../components/UserLayout';
import ItemListContainer from '../components/ItemListContainer'; */



/*useEffect(() => {
    getProductos(categoryId)
      .then(items => setProductos(items)) //aca adentro va el usestate "cargando " pasando a false
      .catch(error => console.log(error))

  }, [categoryId])*/




/* <UserLayout>    
        <ItemListContainer/>    
        </UserLayout> */

//export default ItemProduct;