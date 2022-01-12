import { useContext } from "./contexto"
const carrito = () => {
    
    const {carrito, eliminarDelCarrito,limpiarCarrito} = useContext()

    const FinalizarCompra =()=>{
        limpiarCarrito
    }
    return (
        <div>
            
        </div>
    )
}
export default carrito