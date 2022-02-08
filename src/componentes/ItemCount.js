import {useState} from "react";

const ItemCount = ({stock, initial, onAdd}) => {
    
    let [contador, setContador] = useState(initial)
    
    const sumar = ()=>{
        setContador (contador + 1)
    };
    
    const resta = () => {
        setContador (contador - 1)
    }
    
    const agregar = ()=>{
        onAdd(contador)
    }
    
    return (
        <div>
            <p>Contador: {contador} </p>
            <button onClick={sumar}classname="btn btn-primary">+</button>
            <button onClick={resta}classname="btn btn-primary">-</button>
            <button onClick={agregar} classname="btn btn-success" >Agregar item</button>
        </div>
    )
}
export default ItemCount