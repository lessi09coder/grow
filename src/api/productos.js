//Logica de tener los productos en un array organizados, y mandarlos con un GET

import imgFertilizante from '../assets/images/grow_fertilizantes.jpg';
import imgHerramienta from '../assets/images/grow_herramientas.jpg';
import imgMaceta from '../assets/images/grow_macetas.jpg';


const arrayProductos= [
  
    {
        id: 0,
        nombre:"Nitrox",
        categoria:"fertilizante",
        precio:1500,
        descripcion:"Nitrogreno",
        tag:"",
        imagen: imgFertilizante,
    },
    {
        id: 1,
        nombre:"GrowTech",
        categoria:"herramientas",
        precio:4300,
        descripcion:"Kit herramientas",
        tag:"",
        imagen: imgHerramienta,
    },
    {
        id: 2,
        nombre:"Rocket",
        categoria:"macetas",
        precio:1000,
        descripcion:"Macetas 5lts",
        tag:"",
        imagen: imgMaceta,
    },
    
  ];   

export const getProductos = (categoria) => 
  new Promise((res , rej) => {
    const response = categoria
    ? arrayProductos.filter((p) => p.categoria === categoria) : arrayProductos;
    console.log({response})  
    setTimeout(()=> {
        res(response)
    }, 1500)
  });