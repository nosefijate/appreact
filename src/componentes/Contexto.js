import { createContext, useContext, useState } from "react";

const contexto = createContext()

export const {Provider} = contexto

export const useContexto = () => {
    return useContext(contexto)
}

const CustomProvider = ({children}) => {

    const [cantidad_total,setCantidadTotal] = useState(0)
    const [carrito,setCarrito] = useState([])
    const [precio_total, setPrecio ] = useState (0)

    const agregarAlCarrito = (cantidad,producto)=> {
        const carritocopy = [...carrito]
        if(isInCarrito(producto.id)){
            const match = carritocopy.find((p) => p.id === producto.id)
            match.cantidad = match.cantidad + cantidad;
        }else{
            carritocopy.push(producto);
        }
        setCarrito(carritocopy)
        setCantidadTotal(cantidad_total + cantidad)
        setPrecio(precio_total + producto.precio * producto.cantidad)
    }
     
    const eliminarDelCarrito = (id, cantidad, precio) => {
        const carritocopy = [...carrito]
        let carritoFiltrado = carrito.filter(e=>(e.id)!==id)
        setCarrito(carritoFiltrado)
        setCantidadTotal(cantidad_total - cantidad)
        setPrecio (precio_total - precio)
    }

    const limpiarCarrito = () => {  
        setCarrito([])
        setCantidadTotal (0)
        setPrecio (0)
    }

    const isInCarrito = (id) => {
        return carrito.some((p)=> p.id=== id)
    }

    const valorDelContexto = {
        cantidad_total , 
        carrito ,
        precio_total, 
        agregarAlCarrito , 
        eliminarDelCarrito ,
        limpiarCarrito,
    }

    return (
        <Provider value={valorDelContexto}>
            {children}
        </Provider>
    )
}

export default CustomProvider