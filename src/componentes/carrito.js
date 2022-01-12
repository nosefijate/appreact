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
            ) : <p>No hay productos en el carrito</p>}

            <button onClick={FinalizarCompra}>finalizar compra</button>
        </div>
    )
}
export default carrito