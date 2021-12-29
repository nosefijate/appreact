import Header from "./componentes/navBar.js"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import "./estilo.scss"
import ItemListContainer from "./componentes/ItemListConteiner.js"
import ItemDetailConteiner from "./componentes/ItemDetailConteiner.js"
function App () {
    return(
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" greeting="Bienvenido" element={ItemListContainer} />
                    <Route path="/item/:id" element={ItemDetailConteiner} />
                </Routes>
            </Router>
        </div>
    )}

export default App