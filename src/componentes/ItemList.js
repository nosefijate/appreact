import Item from "./Item"

const ItemList = ({produs}) => {
    return (
        <div>
            {produs.map((item,index)=>{
                return <Item key={index} item={item}/>
            })}
        </div>
    )
}

export default ItemList