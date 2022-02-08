import React from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useContexto } from "./Contexto";
import { db } from "./firebase";
import DataForm from "./DataForm";


const Formulario = () => {

    const { carrito, limpiarCarrito, precio_total, setIdCompra } = useContexto();

    const vaciarTodo = () => {
        limpiarCarrito();
        setIdCompra(null);
    }

    const showModal = () => {
        const modal = document.getElementById('modalDatos');
        modal.style.display = 'block';
        modal.style.backgroundColor = 'rgba(0,0,0,0.5)';
        modal.className = 'modal fade show';
    }

    const finalizarCompra = (event) => {
        event.preventDefault();
        showModal();
        const nombre = event.target.elements.nombre.value;
        const mail = event.target.elements.mail.value;
        const telefono = event.target.elements.telefono.value;
        const direccion = event.target.elements.direccion.value;
        const metodoPago = event.target.elements.metodo_pago.value;
        
        const ventasCollection = collection(db, "ventas");
        addDoc(ventasCollection, {
            buyer: {
                name: nombre,
                email: mail,
                telefono: telefono,
                direccion: direccion,
                metodoPago: metodoPago,
            },

            items: carrito,
            date: serverTimestamp(),
            total: precioTotal
        })

        .then((resultado) => {
            setIdCompra(resultado.id);
        })
    }
    return(
        <>
            <form className="row g-3" onSubmit={finalizarCompra}>
                <div className="col-md-6">
                    <label className="form-label">Nombre y Apellido</label>
                    <input type="text" className="form-control" name="nombre" placeholder="Nombre y apellido" required/>
                </div>
                <div className="col-md-6">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control" name="mail" placeholder="Email" required/>
                </div>
                <div className="col-md-6">
                    <label className="form-label">Teléfono</label>
                    <input type="text" className="form-control" name="telefono" placeholder="Teléfono" required/>
                </div>
                <div className="col-12">
                    <label className="form-label">Dirección</label>
                    <input type="text" className="form-control" name="direccion" placeholder="Dirección" required/>
                </div>
                <div className="col-md-4">
                    <label className="form-label">Medio de pago</label>
                    <select name="metodo_pago" className="form-select" defaultValue={1}>
                        <option value={'efectivo'} required>Efectivo</option>
                        <option value={'transferencia_bancaria'}>Transferencia bancaria</option>
                    </select>
                </div>
                <div className="col-12">
                    <button type="submit" className="btn btn-success">
                        Terminar compra
                    </button>
                </div>
            </form>
            <ModalDatos onClose={vaciarCarritoPostCompra}/>
        </>
    )
}

export default Formulario;