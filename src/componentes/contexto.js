import { createContext, useContext, useState } from "react";
const contexto = createContext()
export const { Provider } = contexto

export const useContexto = () => {
    return useContext(contexto)
}



const CustomProvider = ({children}) => {

    const [cantidad_total,setCantidadTotal] = useState(0)
    const [carrito,setCarrito] = useState([])
    const [precio_total, setPrecio ] = useState (0)

    const agregarAlCarrito = (producto,cantidad) => {
        const id = producto.id
        if(isInCarrito(id)){

            const carritocopy = [...carrito]
            let repe= carritocopy.find((p) => p.id===producto.id)
            repe.cantidad = repe.cantidad +cantidad
            setCarrito (carritocopy) 
        }else{
        const productoycant= {
            ...producto,
            cantidad
        }
        setCarrito([...producto, productoycant])
        }
        setCantidadTotal (cantidad_total + cantidad)
    }
    const precioCarrito = () =>{
        
    }  
     

    const eliminarDelCarrito = (id, cantidad) => {
        const carritocopy = [...carrito]
        let carritoFiltrado = carrito.filter(e=>(e.id)!==id)
        setCarrito(carritoFiltrado)
        setCantidadTotal(cantidad_total - cantidad)

    }

    const limpiarCarrito = () => {  
        setCarrito([])
        setCantidadTotal (0)
    }

    const isInCarrito = (id) => {
        return carrito.some((p)=> p.id=== id)
    }

    const valorDelContexto = {
        cantidad_total , 
        carrito , 
        agregarAlCarrito , 
        eliminarDelCarrito ,
        limpiarCarrito
    }

    return (
        <Provider value={valorDelContexto}>
            {children}
        </Provider>
    )
}

export default CustomProvider