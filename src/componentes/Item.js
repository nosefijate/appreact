import{ NavLink } from "react-router-dom"

const Item = ({item}) => {
    return (
        <div className="card">           
        <img  className="card-img-top" src={item.imagen} alt={item.nombre}/>
        <div className="card-body">
            <h5 className="card-title">{item.nombre}</h5>
            <p className="card-text"> Descripción: {item.descripcion}</p>
            <h5> Precio $ {item.precio}</h5>
            <NavLink to={"/item/${item.id}"}> 
            <button className="btn btn-primary"> Ver detalle </button>
            </NavLink>
        </div>
    </div> 
    )
}

export default Item