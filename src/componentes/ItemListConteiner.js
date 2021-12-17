import { useEffect, useState } from "react"
import ItemCount from "./ItemCount"
import ItemList from "./ItemList"

const productosI =[
    {nombre:"vino1", precio: "$100", img:"x"},
    {nombre: "vino2", precio:"150", img: "y"},
    {nombre: "vino3", precio: "500", img: "z"},

]

const ItemListContainer = ({lista}) => {
    let [produs,setLista]=([])

    const [cant, setCant] = useState (1)

    const onAdd= (cant)=>{
        setCant(cant)
    }

    useEffect(()=>{
        const promise = new Promise ((resolve, reject)=>{
            setTimeout(() => {
                resolve(productosI)
            }, 2000);
        })
        promise

            .then((productos) => {
                setLista(productos)
            })
            .catch(() => {
                console.log("Error")
            })
    },[])

    return (
        <div>
            <p> {lista} </p>
            <ItemCount stock={5} initial={1} onAdd={onAdd} />
            <ItemList prod={produs} />
        </div>
    )
} 

export default ItemListContainer