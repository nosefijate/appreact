const ItemDetail = ({produs}) => {
        return (
            <div>
                <p>Nombre: {produs.nombre}</p>
                <p>Precio: ${produs.precio}</p>
            </div>
        )
    }
    
export default ItemDetail