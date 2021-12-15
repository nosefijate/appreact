import Header from "./componentes/navBar.js"
import ItemListConteiner from "./componentes/ItemListConteiner.js"
import "./estilo.scss"
function App (){
    return(
        <>
        < Header></Header>
        <ItemListConteiner lista="Lista" />
        </>
    )}
export default App