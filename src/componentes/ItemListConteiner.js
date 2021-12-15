import { useState } from "react"
const ItemListContainer = ({lista}) => {
    const [cant, setCant] = useState (1)
    const onAdd= (cant)=>{
        setCant(cant)
    }
    return (
        <div>
            <p> {lista} </p>
            <ItemCount stock={5} initial={1} onAdd={onAdd} />
        </div>
    )
}

export default ItemListContainer