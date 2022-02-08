import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, doc, getDoc } from "firebase/firestore";
import { db } from "./firebase";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState(null);
    const { idProducto } = useParams();

    useEffect(() => {

        const Collection = collection(db, "productos")

        const refDoc = doc(Collection, idProducto)
        getDoc(refDoc)
            .then((resultado) => {
                const productoData = resultado.data();
                productoData.id = idProducto;
                setProducto(productoData);
            })
            .catch((error)=> {
                console.log(error);
            })

    }, [ idProducto ]);

    return(
        <>
            <ItemDetail item={producto} />
        </>
    )
}

export default ItemDetailContainer;