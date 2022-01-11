import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail"

const productosI = {
    nombre
}

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
        )[]})
    
    return (
        <div>
            <h3>Detalle</h3>
            <ItemDetail producto={productosI}/>
        </div>
    )
}

export default ItemDetailConteiner