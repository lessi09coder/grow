import {db} from "./configFirebase";
import {collection, addDoc} from "firebase/firestore";

const ordersRef = collection(db, "orders");

//crea la orden de compra, la agrega al firebase y devuelve el id de "orden de compra"
export const addOrder = async (order) => {
    const orderDoc = await addDoc(ordersRef, order)
    //console.log({orderDoc})
    return orderDoc.id  /* este id es el id de la orden de compra que se le devuelve al usuario (como id de la compra)*/
}