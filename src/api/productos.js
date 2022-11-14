import {
  //trae la coleccion
  collection,
  //trae muchos documentos:
  getDocs,
  //trae un documento:
  getDoc,
  //de donde trae el documento:
  doc,
  //busquedas:
  query,
  //comparar?
  where
  // limit para traer una cantidad especifica de items
} from "firebase/firestore";

import { db } from "./configFirebase"

const productRef = collection(db, 'items') // primer parametro es recibe la base de datos, segundo es la coleccion que queremos traer (en este caso se llama "items" porque asi lo cree en cloud firestone)


//Es una funcion asincrona para traer TODOS LOS PRODUCTOS de firebase.
export const getProductos = async () => {  
  const products = []

  const querySnapshot = await getDocs(productRef);

  querySnapshot.forEach((doc) => {
    //console.log(doc.id, " => ", doc.data());
    products.push({ ...doc.data(), id: doc.id })
    //doc.data es todos los campos que tiene cada items    
  });

  //console.log({products})
  return products
}
// trae por categoria de firebase
export const getProductosPorCategoria = async (categoria) => {
  const productos = [];
  const q = query(productRef, where("categoria", "==", categoria)) //query para buscar , y el where:primer parametro es el campo de items categoria de firebase, segundo el comparador , ultimo parametro lo que le pasamos nosotros), el where es similar al map
  const querySnapshot = await (getDocs(q));

  querySnapshot.forEach((doc) => {
    productos.push({ ...doc.data(), id: doc.id })
  })
  return productos
}
//trae por producto de firebase
export const getProductoId = async (ElIdDelProducto) => {
  const document = doc(db, "items", ElIdDelProducto) //doc recibe la base de datos, el nombre de la coleccion, y el id especifico de un documento.
  const docSnap = await getDoc(document) // ele document que traemos es el que especificamos antes con el doc().
  if (docSnap.exists()) { //.exist es un metodo para saber si existe, devuelve t o f
    return { id: docSnap.id, ...docSnap.data() }
  }
  return null // por si no retorna nada
}


// ESTO ERA LO ANTERIOR =>..

//Logica de tener los productos en un array organizados, y mandarlos con un GET (esto era antes de usar FIREBASE)

/* import imgFertilizante from '../assets/images/grow_fertilizantes.jpg';
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
    nombre: "Rocket 5",
    categoria: "macetas",
    precio: 1000,
    stock: 8,
    descripcion: "Macetas 5lts",
    tag: "",
    imagen: imgMaceta,
  },

]; */





/* export const getProductos = (categoria) =>
  new Promise((res, rej) => {
    const response = categorias
      ? arrayProductos.filter((p) => p.categoria === categoria) : arrayProductos;
    console.log({ response })
    setTimeout(() => {
      res(response)
    }, 1500)
  }); */

/* export const getProductoId = (ElIdDelProducto) =>
  new Promise((res, rej) => {
    const response = arrayProductos.find((p) => p.id === +ElIdDelProducto)
    console.log(ElIdDelProducto)
    console.log({ response })
    setTimeout(() => {
      res(response)
    }, 1500)
  }); */