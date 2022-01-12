import Header from "./componentes/navBar.js"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import "./estilo.scss"
import CustomeProvider, {Provider} from "./contexto"
import ItemListContainer from "./componentes/ItemListConteiner.js"
import ItemDetailConteiner from "./componentes/ItemDetailConteiner.js"
function App () {
    return(
        <CustomeProvider>
            <BrowserRouter>
                <Header nombre={"Duna"}/>
                <main>
                    <Router>
                        <Routes>
                            <Route path="/" greeting="Bienvenido" element={ItemListContainer} />
                            <Route path ="/carrito" element ={Carrito}/>
                            <Route path="/item/:id" element={ItemDetailConteiner} />
                        </Routes>
                    </Router>     
                </main>
            </BrowserRouter>
        </CustomeProvider>
    )}

export default App