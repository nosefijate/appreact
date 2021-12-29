import ItemCount from "./ItemCount"


const ItemDetail = ({produs}) => {
    const onAdd = (cantidad)=>{

    }
        return (
            <div>
                <p>Nombre: {produs.nombre}</p>
                <p>Precio: ${produs.precio}</p>
                <ItemCount stock={5} initial={1} onAdd={onAdd}/>
            </div>
        )
    }
    
export default ItemDetail