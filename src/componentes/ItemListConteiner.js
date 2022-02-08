import { useEffect, useState } from "react"
import ItemCount from "./ItemCount"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"
import { db } from "./Firebase"
import { getDocs, query, collection , where } from "firebase/firestore"

const ItemListContainer = ({greeting}) => {
    let [lista, setLista] = useState([])
    const { nombre } = useParams()


    useEffect(() => {

        const productosCollection = collection(db, "productos")

        if (nombre) {

            const consulta = query(productosCollection,where("categoria","==",nombre),where("precio",">",1000))
            getDocs(consulta)
                .then(({ docs }) => {
                    setLista(docs.map((doc) => ({ id: doc.id, ...doc.data() })))
                })
                .catch((error) => {
                    console.log(error)
                })

        } else {

            getDocs(productosCollection)
                .then(({ docs }) => {
                    setLista(docs.map((doc) => ({ id: doc.id, ...doc.data() })))
                })
                .catch((error) => {
                    console.log(error)
                })
        }

    }, [nombre])

    return (
        <div>
            <h2>{greeting}</h2>
            <ItemList lista={lista}/>
        </div>
    )
} 

export default ItemListContainer