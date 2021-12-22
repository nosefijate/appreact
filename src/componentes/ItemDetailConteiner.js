import { useEffect } from "react";
import ItemDetail from "./ItemDetail"

const ItemDetailConteiner = ()=> {
    let [produs,setLista]=([])

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
            <h3>Detalle</h3>
            <ItemDetail producto={productosI}/>
        </div>
    )
}

export default ItemDetailConteiner