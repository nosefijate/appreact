import { useContext } from "./contexto"
const carrito = () => {
    
    const {carrito, eliminarDelCarrito,limpiarCarrito} = useContext()

    const FinalizarCompra =()=>{
        limpiarCarrito
    }
    return (
        <div>
            Soy Carrito
            {carrito.length > 0 ? (
                <div> 
                <ul>
                    {carrito.map((producto, indice) => {
                        return (
                            <li key={indice}>
                                {producto.nombre} - ${producto.precio}
                                <button onClick={()=>eliminarDelCarrito(producto.id,producto.cantidad)}>borrar</button>
                            </li>
                        )
                    })}
                </ul>
                <p>Total {} </p>
                <button onClick={FinalizarCompra}>Finalizar compra</button>
                </div>
            ) : <p>No hay productos en el carrito</p>}

            
        </div>
    )
}
export default carrito