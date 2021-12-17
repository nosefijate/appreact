const Item = ({item}) => {
    return (
        <article>
            <h2>{item.nombre}</h2>
            <p>Precio : ${item.precio}</p>
            <button>ver detalle</button>
        </article>
    )
}

export default Item