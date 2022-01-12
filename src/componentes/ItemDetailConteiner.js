import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail"

const productosI =[
    {id:1, nombre:"vino1", precio: "$100", img:"x"},
    {id:2, nombre: "vino2", precio:"150", img: "y"},
    {id:3, nombre: "vino3", precio: "500", img: "z"},

]

const ItemDetailConteiner = ()=> {
    let [produs,setLista]= useState([])
    const [loading, setLoad] = useState (false)
    const {id}= useParams()

    useEffect(()=>{
        setLoad (true);
        fetch(productosI)
        .then((res) => res.json ())
        .then((response =>{
            setLoad(false)
            setLista (response.data)
        })
        .catch ((error) => {
            setLoad(false)
        })
        )[id]})
    
    return (
        <div>
            <h3>Detalle</h3>
            <ItemDetail producto={productosI}/>
        </div>
    )
}

export default ItemDetailConteiner