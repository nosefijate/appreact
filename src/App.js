import Header from "./componentes/navBar.js"
import ItemListConteiner from "./componentes/ItemListConteiner.js"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import "./estilo.scss"
function App () {
    return(
        <BrowserRouter>
            < Header></Header>
            <ItemListConteiner lista="Lista" />
        </BrowserRouter>
    )}

export default App