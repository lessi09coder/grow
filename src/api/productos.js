//Logica de tener los productos en un array organizados, y mandarlos con un GET

import imgFertilizante from '../assets/images/grow_fertilizantes.jpg';
import imgHerramienta from '../assets/images/grow_herramientas.jpg';
import imgMaceta from '../assets/images/grow_macetas.jpg';


const arrayProductos = [

  {
    id: 0,
    nombre: "Nitrox",
    categoria: "fertilizantes",
    precio: 1500,
    stock: 10,
    descripcion: "Nitrogreno",
    tag: "",
    imagen: imgFertilizante,
  },
  {
    id: 1,
    nombre: "GrowTech",
    categoria: "herramientas",
    precio: 4300,
    stock: 4,
    descripcion: "Kit herramientas",
    tag: "",
    imagen: imgHerramienta,
  },
  {
    id: 2,
    nombre: "Rocket",
    categoria: "macetas",
    precio: 1000,
    stock: 8,
    descripcion: "Macetas 5lts",
    tag: "",
    imagen: imgMaceta,
  },

];

export const getProductos = (categoria) =>
  new Promise((res, rej) => {
    const response = categoria
      ? arrayProductos.filter((p) => p.categoria === categoria) : arrayProductos;
    console.log({ response })
    setTimeout(() => {
      res(response)
    }, 1500)
  });

export const getProductoId = (productId) =>
  new Promise((res, rej) => {
    const response = arrayProductos.find((p) => p.id === +productId)
    console.log(productId)
    console.log({ response })
    setTimeout(() => {
      res(response)
    }, 1500)
  });