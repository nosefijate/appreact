import { useEffect, useState } from "react"
import ItemCount from "./ItemCount"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"
import { db } from "./firebase"
import { getDocs, query, collection , where } from "firebase/firestore"

const ItemListContainer = ({lista}) => {
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
            <p> {lista} </p>
            <ItemCount stock={5} initial={1} onAdd={onAdd} />
            <ItemList prod={produs} />
        </div>
    )
} 

export default ItemListContainer