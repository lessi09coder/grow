




const ItemProduct = () => {
   
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


export default ItemProduct;