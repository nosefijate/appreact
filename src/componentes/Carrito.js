import {useContexto} from "./Contexto"
import { addDoc, collection , serverTimestamp , updateDoc } from "firebase/firestore"
import { db } from "./Firebase"
import Formulario from "./Formulario"

const Carrito = () => {
    
    const {carrito, eliminarDelCarrito,limpiarCarrito} = useContexto()

    const FinalizarCompra =()=>{
        limpiarCarrito
    }
    return (
        <div>
            Carrito
            {carrito.length > 0 ? (
                <div> 
                <ul>
                    {carrito.map((producto, indice) => {
                        return (
                            <li key={indice}>
                                {producto.nombre} - ${producto.precio}
                                <button onClick={()=>eliminarDelCarrito(producto.id,producto.cantidad,producto.precio)}>borrar</button>
                            </li>
                        )
                    })}
                </ul>
                <p>Total $ {precio_total} </p>
                <button onClick={FinalizarCompra}>Finalizar compra</button>
                <Formulario/>
                </div>
            ) : <p>No hay productos en el carrito</p>}

                <Link to="/">
                    <button className=" btn btn-primary">Home</button>                    
                </Link>
        </div>
    )
}
export default Carrito