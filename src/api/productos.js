//Logica de tener los productos en un array organizados, y mandarlos con un GET

import imgFertilizante from '../assets/images/grow_fertilizantes.jpg';
import imgHerramienta from '../assets/images/grow_herramientas.jpg';
import imgMaceta from '../assets/images/grow_macetas.jpg';


const arrayProductos= [
  
    {
        id: 0,
        nombre:"Nitrox",
        precio:1500,
        descripcion:"Nitrogreno",
        tag:"",
        imagen: imgFertilizante,
    },
    {
        id: 1,
        nombre:"GrowTech",
        precio:4300,
        descripcion:"Kit herramientas",
        tag:"",
        imagen: imgHerramienta,
    },
    {
        id: 2,
        nombre:"Rocket",
        precio:1000,
        descripcion:"Macetas 5lts",
        tag:"",
        imagen: imgMaceta,
    },
    
  ];   

export const getProductos = () => 
  new Promise((res , rej) => {
    setTimeout(()=> {
        res(arrayProductos)
    }, 1500)
  });